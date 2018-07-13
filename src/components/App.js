// Libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

// Components
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';

import { handleInitialData } from '../actions/shared';

import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/question/:question_id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' exact component={Login} />
                  <Route component={NoMatch} />
                </Switch>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    loading: users === null || questions === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
