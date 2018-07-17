import React from 'react';

export default function LeaderboardHeader() {
  return (
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
  );
}
