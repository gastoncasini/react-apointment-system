import React, { Component } from 'react';
import FormBlock from './FormBlock';
import TimePicker from './TimePicker';
import ContatInfo from './ContacInfo';
import Modal from './Modal';
import { formatDay } from '../utils.js';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: 1,
      isModalOpen: false,
      inputValue: '',
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  clickHandler(value) {
    this.setState({ open: value });
  }

  toggleModal() {
    const change = !this.state.isModalOpen;
    this.setState({
      isModalOpen: change,
    });
  }

  setDate(date) {
    const displayDate = {
      value: formatDay(date),
      position: 0,
    };
    this.props.handleClick(displayDate);

    const inputDate = formatDay(date, 'input');
    this.setState({ value: inputDate });
  }

  setTime(time) {
    const displayTime = {
      value: time,
      position: 1,
    };
    this.props.handleClick(displayTime);
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <React.Fragment>
        <form className='form'>
          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={1}
            info={'Elegi un dia disponible para tu reserva'}
          >
            <input
              placeholder='Seleciona un dia'
              value={this.state.value}
              type='text'
              className='form__block__input'
              onClick={this.toggleModal}
            />

            {isModalOpen && (
              <Modal toggleModal={this.toggleModal} setDate={this.setDate} />
            )}
          </FormBlock>

          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={2}
            info={'Elegi un horario disponible para tu reserva'}
          >
            <TimePicker setTime={this.setTime} />
          </FormBlock>

          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={3}
            info={'Por favor completa con tu infomacion de concacto'}
          >
            <ContatInfo />
          </FormBlock>
        </form>
      </React.Fragment>
    );
  }
}
export default Form;
