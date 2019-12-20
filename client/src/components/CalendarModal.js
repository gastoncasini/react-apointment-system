import React, { Component } from "react";
import Calendar from "react-calendar";
import Modal from "./Modal";
import { formatDay, updateArray } from "../utils.js";

export class CalendarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: Array(4).fill(""),
      date: new Date()
    };
    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentDidMount() {
    const { date } = this.state;
    const initDisplay = formatDay(date, "array");
    this.setState({
      display: initDisplay
    });
  }

  updateDisplay(newDisplay) {
    const current = this.state.display;
    const displayArray = formatDay(newDisplay, "array");
    const updatedDisplay = current.map((value, index) => {
      return displayArray[index];
    });
    return updatedDisplay;
  }

  dayUpdateControler(day) {
    const newDisplayInfo = this.updateDisplay(day);

    this.setState({
      date: day,
      display: newDisplayInfo
    });
  }

  close() {
    this.props.toggleModal("calendar");
  }
  confirm() {
    const { date } = this.state;
    this.props.setDate(date);
    this.close();
  }

  render() {
    const { display } = this.state;

    return (
      <Modal>
        <div className="modal__display">
          <div className="modal__display__small modal__small--top">
            {display[0]}
          </div>

          <div className="modal__display__big">{`${display[1]},`}</div>
          <div className="modal__display__big">{`${display[2]} ${display[3]}`}</div>
        </div>
        <div className="modal__calendar">
          <Calendar
            onClickDay={(day) => {
              this.dayUpdateControler(day);
            }}
          />
          <div className="modal__controls">
            <button
              type="button"
              className="modal__controls__button"
              onClick={this.close}
            >
              CANCEL
            </button>
            <button
              type="button"
              className="modal__controls__button"
              onClick={this.confirm}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default CalendarModal;
