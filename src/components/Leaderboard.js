import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeaderboardEntry from './LeaderboardEntry';

class Leaderboard extends Component {
  render() {
    console.log(this.props);

    const { usersArray } = this.props;

    return (
      <div>
        <h3 className='center'>The Leaderboard</h3>
        {usersArray.map((user) => (
          <LeaderboardEntry key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    usersArray: Object.values(users),
    questions,
  }
}

export default connect(mapStateToProps)(Leaderboard);
