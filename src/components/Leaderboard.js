import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForUser } from '../utils/Utils';

class Leaderboard extends Component {
  render() {
    console.log(this.props);

    let redirectToLogin = checkForUser(this.props.authedUser);
    if (redirectToLogin !== null) {
      return redirectToLogin;
    }
    return (
      <div>
        <h3 className='center'>The Leaderboard</h3>
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

export default connect(mapStateToProps)(Leaderboard);
