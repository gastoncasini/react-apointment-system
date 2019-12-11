import React, { Component } from 'react';
import FormBlock from './FormBlock';
import TimePicker from './TimePicker';
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
            <div className='form__block__element'>
              <input
                placeholder='Seleciona un dia'
                value={this.state.value}
                type='text'
                className='form__block__input'
                onClick={this.toggleModal}
              />
            </div>
            {isModalOpen && (
              <Modal toggleModal={this.toggleModal} setDate={this.setDate} />
            )}
          </FormBlock>

          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={2}
            info={'Elegi un horario disponible para tu reserva'}
          ></FormBlock>

          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={3}
            info={'Por favor completa con tu infomacion de concacto'}
          ></FormBlock>
        </form>
      </React.Fragment>
    );
  }
}
export default Form;
