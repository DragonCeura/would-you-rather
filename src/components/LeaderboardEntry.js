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
          className='avatar leaderboard-avatar'
        />
        <div className='leaderboard-asked'>
          {numQuestionsAsked(user)}
        </div>
        <div className='leaderboard-answered'>
          {numQuestionsAnswered(user)}
        </div>
        <div className='leaderboard-score'>
          {userScore(user)}
        </div>
      </div>
    );
  }
}

export default LeaderboardEntry;
