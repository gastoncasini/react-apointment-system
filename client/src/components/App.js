import React, { Component } from 'react';

import Display from './Display';
import '../css/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentInfo: ['Martes 19 de Septiembre', '19:00'],
    };
  }

  render() {
    return (
      <div className='App'>
        <Display info={this.state.currentInfo} />
      </div>
    );
  }
}

export default App;
