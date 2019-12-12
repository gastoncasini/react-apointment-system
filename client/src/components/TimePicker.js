import React, { Component } from 'react';
import { fillSchedule } from '../utils.js';

class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedules: {
        am: [8, 11],
        pm: [12, 17],
      },
      selectOption: 'AM',
      schedule: [null],
      checked: null,
    };

    this.setSchedule = this.setSchedule.bind(this);
  }
  componentDidMount() {
    this.setSchedule('am');
  }

  handleChange = changeEvent => {
    const value = changeEvent.target.value;
    const name = changeEvent.target.name;

    this.setState({ [name]: value });

    if (name === 'checked') {
      this.props.setTime(value);
    }
    if (name === 'selectOption') {
      this.setSchedule(value);
    }
  };

  setSchedule(amOrPm) {
    const { schedules } = this.state;
    const currentSchedule = fillSchedule(...schedules[amOrPm]);
    this.setState({
      schedule: currentSchedule,
      checked: currentSchedule[0],
    });
  }

  render() {
    const { schedule } = this.state;
    const radioButtons = Array(schedule.length - 1)
      .fill(null)
      .map((x, index) => {
        const innerText = `${schedule[index]} - ${schedule[index + 1]}`;
        const value = schedule[index];

        return (
          <label>
            <input
              type='radio'
              value={value}
              checked={this.state.checked === value}
              key={index}
              name={'checked'}
              onChange={this.handleChange}
              className={'timepicker__radio'}
            />
            {innerText} <br />
          </label>
        );
      });

    return (
      <div className='timepicker'>
        <select
          name={'selectOption'}
          onChange={this.handleChange}
          className={'timepicker__select'}
        >
          <option value='am'>AM</option>
          <option value='pm'>PM</option>
        </select>
        <div className='timepicker__radio-group'>
          {radioButtons.map(value => {
            return value;
          })}
        </div>
      </div>
    );
  }
}

export default TimePicker;
