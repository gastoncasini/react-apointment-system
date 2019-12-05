import React, { Component } from 'react';

class TimePicker extends Component {
  fillSchedule = (start, end) => {
    let schedule = [];
    for (let i = start; i <= end; i++) {
      const current = i < 10 ? `0${i}:00` : `${i}:00`;

      schedule.push(current);
    }
    return schedule;
  };

  render() {
    const schedule = this.fillSchedule(9, 17);
    return (
      <div className='time-picker'>
        {schedule.map((value, index) => {
          return (
            <button
              type='button'
              key={index}
              className='time-picker__tile'
              onClick={() => {
                this.props.onClickTime(value);
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
  }
}

export default TimePicker;
