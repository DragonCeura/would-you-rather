// Libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import PropTypes from 'prop-types';

// Components
import Nav from './Nav';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';

import { handleInitialData } from '../actions/shared';

import '../styles/App.css';

class App extends Component {
  static propTypes = {
    getInitialData: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getInitialData();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <Switch>
                  <Route path='/login' exact component={Login} />
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <PrivateRoute path='/question/:question_id' component={QuestionPage} />
                  <PrivateRoute path='/add' component={NewQuestion} />
                  <PrivateRoute path='/leaderboard' component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

// This assumes that there will always be at least one user initially available
function mapStateToProps({ authedUser, users, questions }) {
  return {
    loading: Object.values(users).length === 0 || Object.values(questions).length === 0,
    authedUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitialData: () => {dispatch(handleInitialData())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
