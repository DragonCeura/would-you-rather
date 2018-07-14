import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ component: Component, authedUser = null, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (authedUser
        ? <Component { ...props } />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
      )
    }
  />
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
