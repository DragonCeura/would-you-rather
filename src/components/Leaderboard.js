import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    console.log(this.props);

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
