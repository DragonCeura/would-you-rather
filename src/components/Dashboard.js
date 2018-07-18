import React from 'react';
import { connect } from 'react-redux';

import QuestionsList from './QuestionsList';

const Dashboard = ({ authedUser, users }) => (
  <div className='container'>
    <h3 className='center'>{users[authedUser].name}, would you rather...</h3>
    <QuestionsList />
  </div>
)

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Dashboard);
