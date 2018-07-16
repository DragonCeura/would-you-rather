import React, { Component } from 'react';

import { userScore } from '../utils/Utils';

class LeaderboardEntry extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        LeaderboardEntry for {user.name} with score: {userScore(user)}
      </div>
    );
  }
}

export default LeaderboardEntry;
