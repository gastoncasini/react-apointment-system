import React, { Component } from "react";
import CalendarModal from "./CalendarModal";
import { formatDay } from "../utils";

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(date) {
    const displayDate = {
      value: formatDay(date),
      position: 0
    };
    const inputDate = formatDay(date, "input");

    this.props.handleClick(displayDate);
    this.props.setDate(date);
    this.setState({
      inputValue: inputDate
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Seleciona un dia"
          value={this.state.inputValue}
          type="text"
          className="form__block__input"
          onClick={() => {
            this.props.toggleModal("calendar");
          }}
          readOnly
        />

        {this.props.isShowing && (
          <CalendarModal
            toggleModal={this.props.toggleModal}
            setDate={this.setDate}
          />
        )}
      </React.Fragment>
    );
  }
}

export default DatePicker;
