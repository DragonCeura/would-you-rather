import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

/* Example question object:
{
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
  },
  optionTwo: {
    votes: [],
    text: 'have horrible long term memory'
  }
}
*/


function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) =>  dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddQuestion', e);
        alert('There was an error adding the question. Try again');
      });
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion ({ id, authedUser }) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    // Other question attributes
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e);
        alert('There was an error answering the question. Try again');
      });
  }
}
