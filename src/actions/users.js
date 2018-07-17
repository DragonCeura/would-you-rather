export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWERED_QUESTION = 'ANSWERED_QUESTION';
export const ASKED_QUESTION = 'ASKED_QUESTION';

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
