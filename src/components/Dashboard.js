import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);

    // TODO: Check against authedUser to determine user dashboard or sign-in?

    return (
      <div>
        <h3 className='center'>Your Dashboard</h3>
      </div>
    );
  }
}

export default connect()(Dashboard);
