import React, { Component } from 'react';

import { userScore, numQuestionsAnswered, numQuestionsAsked } from '../utils/Utils';

class LeaderboardEntry extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className='leaderboard-entry'>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className='avatar'
        />
        <div className='leaderboard-score'>
          {user.name} has a score of: {userScore(user)}.
        </div>
        <div className='leaderboard-asked'>
          {numQuestionsAsked(user)} questions asked.
        </div>
        <div className='leaderboard-answered'>
          {numQuestionsAnswered(user)} questions answered.
        </div>
      </div>
    );
  }
}

export default LeaderboardEntry;
