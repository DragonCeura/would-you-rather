import React from 'react';
import PropTypes from 'prop-types';

import { userScore, numQuestionsAnswered, numQuestionsAsked } from '../utils/Utils';

const LeaderboardEntry = ({ user }) => {
  return (
    <div className='leaderboard-entry'>
      <div className='leaderboard-avatar'>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className='avatar'
        />
      </div>
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

LeaderboardEntry.propTypes = {
  user: PropTypes.object.isRequired
}

export default LeaderboardEntry;
