import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userScore } from '../utils/Utils';

import LeaderboardEntry from './LeaderboardEntry';

class Leaderboard extends Component {
  render() {
    const { usersArray } = this.props;

    return (
      <div className='container'>
        <h3 className='center'>The Leaderboard</h3>
        <div className='leaderboard'>
          <div className='leaderboard-header'>
            <div className='leaderboard-avatar' />
            <div className='leaderboard-asked'>
              Questions Asked
            </div>
            <div className='leaderboard-answered'>
              Questions Answered
            </div>
            <div className='leaderboard-score'>
              Score
            </div>
          </div>
          {usersArray.map((user) => (
            <LeaderboardEntry key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    usersArray: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
    questions,
  }
}

export default connect(mapStateToProps)(Leaderboard);
