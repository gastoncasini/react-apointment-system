import React, { Component } from 'react';

import Display from './Display';
import Form from './Form';
import '../css/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentInfo: ['Martes 19 de Septiembre', '19:00', 'Gaston Casini'],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    const currentState = this.state.currentInfo;
    const updated = currentState.map((value, index) => {
      if (index === obj.position) {
        return obj.value;
      }
      return value;
    });

    this.setState({ currentInfo: updated });
  }

  render() {
    return (
      <div className='App'>
        <Display info={this.state.currentInfo} />

        <Form handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
