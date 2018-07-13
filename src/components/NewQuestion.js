import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForUser } from '../utils/Utils';

class NewQuestion extends Component {
  render() {
    let redirectToLogin = checkForUser(this.props.authedUser);
    if (redirectToLogin !== null) {
      return redirectToLogin;
    }
    return (
      <div>
        New Question
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(NewQuestion);
