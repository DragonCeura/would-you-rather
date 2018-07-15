import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    const { authedUser, users } = this.props;

    return (
      <div className='center'>
        <h3>New Question to be created by {users[authedUser].name}</h3>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(NewQuestion);
