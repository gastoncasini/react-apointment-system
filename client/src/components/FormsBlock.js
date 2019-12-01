import React, { Component } from 'react';
import Calendar from 'react-calendar';

class FormsBlock extends Component {
  render() {
    return (
      <form className='form'>
        <Calendar
          className='form_block'
          onClickDay={value => {
            this.props.handleDayClick(value);
            console.log(value);
          }}
        ></Calendar>
      </form>
    );
  }
}
export default FormsBlock;
