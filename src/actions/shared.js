import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData, saveQuestionAnswer } from '../utils/api';

import { receiveUsers, userAnswer } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { receiveQuestions, answerQuestion } from '../actions/questions';

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
