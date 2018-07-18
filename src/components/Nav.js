import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { authedUser, users } = this.props;

    const loggedUser = (() => {
      if (authedUser) {
        return `Switch User (logged in as: ${users[authedUser].name})`;
      } else {
        return `Select User`;
      }
    })();

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
              {loggedUser}
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
