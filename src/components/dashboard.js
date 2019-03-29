import React, {Fragment} from 'react';
import Navigation from './navigation';

function Page() {
  return(
    <Fragment>
      <h1 style={{color: 'green'}}>Dashborad</h1>
      <Navigation />
    </Fragment>
  );
}

export default Page;