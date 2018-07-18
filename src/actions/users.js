import { RECEIVE_USERS, ANSWERED_QUESTION, ASKED_QUESTION } from './actionTypes';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function userAnswer ({ authedUser, qid, answer }) {
  return {
    type: ANSWERED_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

export function userQuestion (question) {
  return {
    type: ASKED_QUESTION,
    question,
  }
}
