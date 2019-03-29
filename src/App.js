import React, { Component } from 'react';
import Componente from './componente';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: props.clicks
    }
  }

  render() {
    const { clicks } = this.state;

    return (
      <div>
        <Componente 
        />
        <Componente 
          titulo="Con título"
        />
        <Componente 
          color="green"
        />
        <Componente 
          color="blue"
          items={[1, 2 , 3]}
        />
        <div>
          <h1>Contador</h1>
          <span>{clicks}</span>
          <br />
          <button 
            onClick={() => {
              this.setState({
                clicks : clicks + 1
              })
            }}
          >
          Clikc me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
