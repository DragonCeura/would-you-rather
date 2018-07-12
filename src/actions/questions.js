import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

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

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
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
