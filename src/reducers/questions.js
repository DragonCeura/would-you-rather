import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      // TODO: Handle adding a new question
      return state;
    case ANSWER_QUESTION :
      // TODO: Handle answering a question
      return state;
    default :
      return state;
  }
}
