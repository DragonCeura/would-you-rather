import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userScore } from '../utils/Utils';

import LeaderboardEntry from './LeaderboardEntry';
import LeaderboardHeader from './LeaderboardHeader';

class Leaderboard extends Component {
  render() {
    console.log(this.props);

    const { usersArray } = this.props;

    return (
      <div className='container'>
        <h3 className='center'>The Leaderboard</h3>
        <div className='leaderboard'>
          <LeaderboardHeader />
          {usersArray.map((user) => (
            <LeaderboardEntry key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    usersArray: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
    questions,
  }
}

export default connect(mapStateToProps)(Leaderboard);
