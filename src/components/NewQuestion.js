import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForUser } from '../utils/Utils';

class NewQuestion extends Component {
  render() {
    const { authedUser, users } = this.props;
    let redirectToLogin = checkForUser(authedUser);
    if (redirectToLogin !== null) {
      return redirectToLogin;
    }
    return (
      <div className='center'>
        New Question to be created by {users[authedUser].name}
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
