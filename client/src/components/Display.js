import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <header className='display'>
        <p className='display__para'>
          {' '}
          reservando turno el dia{' '}
          <span className='display__info'>{this.props.info[0]}</span> en el
          horario de
          <span className='display__info'> {this.props.info[1]}</span> para{' '}
          <span className='display__info'>{this.props.info[2]}</span>
        </p>
      </header>
    );
  }
}
export default Display;
