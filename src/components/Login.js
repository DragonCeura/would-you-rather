import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3 className='center'>The Login Screen</h3>
      </div>
    );
  }
}

export default connect()(Login);
