import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    selectedUser: this.props.authedUser ? this.props.authedUser: '',
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedUser } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(selectedUser));

    this.setState(() => ({
      selectedUser,
      toHome: selectedUser === null ? false : true,
    }))
  }

  handleSelectChange = (e) => {
    const selectedUser = e.target.value;
    this.setState(() => ({
      selectedUser,
    }))
  }

  render() {
    const { selectedUser, toHome } = this.state;
    const { authedUser, users, usersArray } = this.props;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {(authedUser === '' || authedUser === null)
          ? <h3 className='center'>You are not currently logged in.</h3>
          : <h3 className='center'>Currently logged in as {users[authedUser].name}</h3>}
        <form className='login-form' onSubmit={this.handleSubmit}>
          <select
            className='login-select'
            value={selectedUser}
            onChange={this.handleSelectChange}
            >
            <option value='' disabled>Select user login</option>
            {usersArray && usersArray.length !== 0 && usersArray.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button
            className='btn'
            type='submit'
            disabled={selectedUser===''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users,
    usersArray: Object.values(users),
  }
}

export default connect(mapStateToProps)(Login);
