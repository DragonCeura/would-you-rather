import React from 'react';
import { Redirect } from 'react-router-dom';

export function checkForUser(authedUser) {
  console.log("Checking against authedUser: ", authedUser);
  if (authedUser === null || authedUser === '') {
    return <Redirect to='/login' />
  }
  return null;
}

function userAnsweredQuestion(user, question) {
  return question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user);
}

export function categorizeQuestions(authedUser, questions) {
  return {
    answered: questions.filter((question) => userAnsweredQuestion(authedUser, question)),
    unanswered: questions.filter((question) => !userAnsweredQuestion(authedUser, question)),
  }
}
