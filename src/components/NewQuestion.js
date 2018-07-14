import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    const { authedUser, users } = this.props;

    return (
      <div className='center'>
        New Question to be created by {users[authedUser].name}
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
