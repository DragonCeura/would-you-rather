import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    users: PropTypes.object.isRequired,
    usersArray: PropTypes.array.isRequired,
    setAuthedUser: PropTypes.func.isRequired,
  }

  state = {
    selectedUser: this.props.authedUser ? this.props.authedUser: '',
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedUser } = this.state;
    const { setAuthedUser } = this.props;
    setAuthedUser(selectedUser);

    this.setState({
      selectedUser,
      toHome: selectedUser === null ? false : true,
    });
  }

  handleSelectChange = e => {
    this.setState({
      selectedUser: e.target.value,
    });
  }

  render() {
    const { selectedUser, toHome } = this.state;
    const { authedUser, users, usersArray, location } = this.props;
    let { from } = location.state || { from: { pathname: location.pathname } };

    if (toHome === true && from.pathname === '/login') {
      return <Redirect to='/' />
    }
    if (authedUser && from.pathname !== '/login') {
      return <Redirect to={ from } />
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

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    usersArray: Object.values(users),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: (selectedUser) => {dispatch(setAuthedUser(selectedUser))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
