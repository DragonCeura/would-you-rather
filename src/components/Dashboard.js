import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForUser } from '../utils/Utils';

class Dashboard extends Component {
  render() {
    console.log('dashboard props:', this.props);

    // TODO: Check against authedUser to determine user dashboard or sign-in?
    let redirectToLogin = checkForUser(this.props.authedUser);
    if (redirectToLogin !== null) {
      return redirectToLogin;
    }

    return (
      <div>
        <h3 className='center'>Dashboard for {this.props.authedUser}</h3>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard);
