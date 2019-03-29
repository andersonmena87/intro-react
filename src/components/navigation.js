import React, {Fragment} from 'react';
import {Link, Redirect, withRouter } from 'react-router-dom';

function Navegation(props) {
  const {history} = props;
  
  return(
    <Fragment>
      <button
        onClick={() => history.push('/settings')}
      >
        Go to settings
      </button>

      <button
        onClick={() => history.goBack()}
      >
        Go back
      </button>

      <button
        onClick={() => history.goForward()}
      >
        Go back
      </button>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
        <Link to="/settings">Settings</Link>
        </li>
        <li>
        <Link to="/reports">Reports</Link>
        </li>
        <li>
        <Link to="/reports/123/lucas">Reports ID</Link>
        </li>
      </ul>

      
      {false && <Redirect to="test" />}
    </Fragment>
  );
}

export default withRouter(Navegation);