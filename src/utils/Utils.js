import React from 'react';
import { Redirect } from 'react-router-dom';

export function checkForUser(authedUser) {
  console.log("Checking against authedUser: ", authedUser);
  if (authedUser === null || authedUser === '') {
    return <Redirect to='/login' />
  }
  return null;
}
