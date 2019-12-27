import React, { Component } from "react";
import { fillSchedule } from "../utils.js";

class TimePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedules: {
        am: [8, 11],
        pm: [12, 17]
      },
      selectOption: "AM",
      schedule: [null],
      checked: null
    };

    this.setSchedule = this.setSchedule.bind(this);
  }
  componentDidMount() {
    this.setSchedule("am");
  }

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const name = changeEvent.target.name;

    this.setState({ [name]: value });

    if (name === "checked") {
      this.props.setTime(value);
      return;
    } else if (name === "selectOption") {
      this.setSchedule(value);
      return;
    } else {
      return;
    }
  };

  setSchedule(amOrPm) {
    const { schedules } = this.state;
    const currentSchedule = fillSchedule(...schedules[amOrPm]);
    this.setState({
      schedule: currentSchedule,
      checked: currentSchedule[0]
    });
  }

  render() {
    const { schedule } = this.state;
    const radioButtons = Array(schedule.length - 1)
      .fill(null)
      .map((x, index) => {
        const innerText = `${schedule[index]} - ${schedule[index + 1]}`;
        const value = schedule[index];
        const isChecked = this.state.checked === value;
        const isCheckedClass = isChecked
          ? "timepicker__custom-radio timepicker__custom-radio--checked"
          : "timepicker__custom-radio ";

        return (
          <label className={"timepicker__radio-container"}>
            <span className={isCheckedClass} type={"button"}></span>
            <input
              type="radio"
              value={value}
              checked={isChecked}
              key={index}
              name={"checked"}
              onChange={this.handleChange}
              className={"timepicker__radio"}
            />
            <div className="timepicker__time">{innerText}</div>
          </label>
        );
      });

    return (
      <div className="timepicker">
        <label className={"timepicker__dropdown"}>
          <span className="timepicker__dropdown__title">AM o PM</span>
          <select
            name={"selectOption"}
            onChange={this.handleChange}
            className={"timepicker__dropdown__select"}
          >
            <option className={"timepicker__dropdown__option"} value="am">
              AM
            </option>
            <option value="pm">PM</option>
          </select>
        </label>
        <div className="timepicker__radio-group">
          {radioButtons.map((value) => {
            return value;
          })}
        </div>
      </div>
    );
  }
}

export default TimePicker;
