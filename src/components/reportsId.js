import React, {Fragment} from 'react';
import Navigation from './navigation';

function ReportId(props) {
  const {match} = props;

  console.log("match", match)
  return(
    <Fragment>
      <h1>Report id</h1>
      <b>
        <div>Parametro Id {match.params.id}</div>
        <div>Parametro Nombre {match.params.nombre}</div>
      </b>
      <br />
      <Navigation />
    </Fragment>
  );
}

export default ReportId;