import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { authedUser, users } = this.props;

    return (
      <div>
        <h3 className='center'>Dashboard for {users[authedUser].name}</h3>
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

export default connect(mapStateToProps)(Dashboard);
