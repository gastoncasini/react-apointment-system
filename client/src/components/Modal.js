import React, { Component } from 'react';
import Calendar from 'react-calendar';
import formatDay from '../helpers.js';

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'hoy',
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__display'>{display}</div>
          <div className='modal__calendar'>
            <Calendar
              onClickDay={day => {
                this.setState({ display: day.toString() });
              }}
            />
            <div className='modal__controls'>
              <button className='modal__controls__button'>Cancel</button>
              <button className='modal__controls__button'>OK</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
