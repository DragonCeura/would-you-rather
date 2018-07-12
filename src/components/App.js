// Libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

// Components
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';

import { handleInitialData } from '../actions/shared';

import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
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
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/new_question' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
