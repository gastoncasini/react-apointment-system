import React, { Component } from 'react';
import FormBlock from './FormBlock';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';
import Modal from './Modal';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: 1,
      isModalOpen: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  clickHandler(value) {
    this.setState({ open: value });
  }

  toggleModal() {
    console.log('toggled!');
  }

  render() {
    return (
      <React.Fragment>
        <form className='form'>
          {/*     <div className='form__block'>
          <p className='form__block__para'>
            Elegi un dia disponible para tu reserva
          </p>
          
        </div> */}

          {/* <div className='form__block'>
          <TimePicker
            onClickTime={time => {
              const timeObj = {
                value: `${time} Hs`,
                position: 1,
              };
              this.props.handleClick(timeObj);
            }}
          />
        </div> */}

          <FormBlock
            onClick={this.clickHandler}
            toggle={this.state.open}
            number={1}
            info={'Elegi un dia disponible para tu reserva'}
          >
            <div className='form__block__element'>
              <input
                type='text'
                className='form__block__input'
                onClick={this.toggleModal}
              />
            </div>
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
            info={'Por favor completa con tu infomracion de concacto'}
          ></FormBlock>
        </form>
        <Modal />
      </React.Fragment>
    );
  }
}
export default Form;
