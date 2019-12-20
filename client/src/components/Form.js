import React, { Component } from "react";
import FormBlock from "./FormBlock";
import TimePicker from "./TimePicker";
import ContatInfo from "./ContacInfo";

import CalendarModal from "./CalendarModal";
import { formatDay } from "../utils.js";
import DatePicker from "./DatePicker";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: 1,
      calendar: false,
      submit: false,
      inputValue: "",
      submitInfo: {
        date: null,
        time: null,

        contactInfo: {
          nombre: null,
          apellido: null,
          telefono: null,
          email: null
        }
      }
    };

    this.toggleBlocks = this.toggleBlocks.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setContactInfo = this.setContactInfo.bind(this);
    this.addSubmitInfo = this.addSubmitInfo.bind(this);
  }

  addSubmitInfo(name, info) {
    const currentInfo = this.state.submitInfo;
    let newInfo = { ...currentInfo, [name]: info };

    this.setState({ submitInfo: newInfo });
  }
  1;

  toggleBlocks(value) {
    this.setState({ open: value });
  }

  toggleModal(modal) {
    const change = !this.state[modal];
    this.setState({
      [modal]: change
    });
  }

  setDate(date) {
    this.addSubmitInfo("date", date);
  }

  setTime(time) {
    const displayTime = {
      value: time,
      position: 1
    };

    this.addSubmitInfo("time", time);
    this.props.handleClick(displayTime);
  }

  setContactInfo(info) {
    this.addSubmitInfo("contactInfo", info);
  }

  render() {
    const { calendar } = this.state;
    return (
      <React.Fragment>
        <form className="form">
          <FormBlock
            onClick={this.toggleBlocks}
            toggle={this.state.open}
            number={1}
            info={"Elegi un dia disponible para tu reserva"}
          >
            <DatePicker
              handleClick={this.props.handleClick}
              toggleModal={this.toggleModal}
              setDate={this.setDate}
              isShowing={calendar}
            />
          </FormBlock>

          <FormBlock
            onClick={this.toggleBlocks}
            toggle={this.state.open}
            number={2}
            info={"Elegi un horario disponible para tu reserva"}
          >
            <TimePicker setTime={this.setTime} />
          </FormBlock>

          <FormBlock
            onClick={this.toggleBlocks}
            toggle={this.state.open}
            number={3}
            info={"Por favor completa con tu infomacion de concacto"}
            rel={true}
          >
            <ContatInfo setContactInfo={this.setContactInfo} />
          </FormBlock>
        </form>
      </React.Fragment>
    );
  }
}
export default Form;
