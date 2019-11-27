import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <header>
        <p>el dia {this.props.info[0]}</p>
        <p>en el horario de {this.props.info[1]}</p>
      </header>
    );
  }
}
export default Display;
