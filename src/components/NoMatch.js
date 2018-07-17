import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <Fragment>
      <Link to='/'>
        Page not found. Click here to go to your Dashboard, or navigate using the links above.
      </Link>
    </Fragment>
  )
}
