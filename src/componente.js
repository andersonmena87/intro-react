import React from 'react';

function Componente(props){
  const {
    titulo,
    color,
    items,
  } = props

  return(
    <div style={{padding: '1rem', backgroundColor: color}}>
      <h1>{titulo}</h1>
      {items.map(item => <li key={item}>{item}</li>)}
    </div>
  )
}

Componente.defaultProps = {
  color:"red",
  titulo: "Sin titulo",
  items: []
}

export default Componente;