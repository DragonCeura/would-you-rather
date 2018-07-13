import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForUser } from '../utils/Utils';

class Dashboard extends Component {
  render() {
    console.log('dashboard props:', this.props);
    const { authedUser, users } = this.props;

    // TODO: Check against authedUser to determine user dashboard or sign-in?
    let redirectToLogin = checkForUser(authedUser);
    if (redirectToLogin !== null) {
      return redirectToLogin;
    }

    return (
      <div>
        <h3 className='center'>Dashboard for {users[authedUser].name}</h3>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard);
