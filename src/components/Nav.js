import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { authedUser, users } = this.props;

    let loggedUser;
    if (authedUser) {
      loggedUser = ` (logged in as: ${users[authedUser].name})`;
    }

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' activeClassName='active'>
              Select User{loggedUser}
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(Nav));
