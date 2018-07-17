import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';

import { receiveUsers, userAnswer, userQuestion } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { receiveQuestions, answerQuestion, addQuestion } from '../actions/questions';

const AUTHED_ID = null;

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      });
  };
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));
    dispatch(userAnswer(info));

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e);
        alert('There was an error answering the question. Try again');
      });
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(userQuestion(question))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddQuestion', e);
        alert('There was an error adding the question. Try again');
      });
  }
}
