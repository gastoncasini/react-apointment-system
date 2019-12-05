import React, { Component } from 'react';
import FormBlock from './FormBlock';
import Calendar from 'react-calendar';
import TimePicker from './TimePicker';

class Form extends Component {
  render() {
    return (
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
          number={1}
          info={'Elegi un dia disponible para tu reserva'}
        ></FormBlock>
        <FormBlock
          number={2}
          info={'Elegi un horario disponible para tu reserva'}
        ></FormBlock>
        <FormBlock
          number={3}
          info={'Por favor completa con tu infomracion de concacto'}
        ></FormBlock>
      </form>
    );
  }
}
export default Form;

const formatDay = string => {
  let weekday = string.slice(0, 3);
  let month = string.slice(4, 7);
  const number = string.slice(8, 10);

  switch (weekday) {
    case 'Mon':
      weekday = 'Lunes';
      break;
    case 'Tue':
      weekday = 'Martes';
      break;
    case 'Wed':
      weekday = 'Miercoles';
      break;
    case 'Thu':
      weekday = 'Jueves';
      break;
    case 'Fri':
      weekday = 'Viernes';
      break;
    case 'Sat':
      weekday = 'Sabado';
      break;
    case 'Sun':
      weekday = 'Domingo';
      break;
    default:
      break;
  }

  switch (month) {
    case 'Jan':
      month = 'Enero';
      break;
    case 'Feb':
      month = 'Febrero';
      break;
    case 'Mar':
      month = 'Marzo';
      break;
    case 'Apr':
      month = 'Abril';
      break;
    case 'May':
      month = 'Mayo';
      break;
    case 'Jun':
      month = 'Junio';
      break;
    case 'Jul':
      month = 'Julio';
      break;
    case 'Aug':
      month = 'Agosto';
      break;
    case 'Sep':
      month = 'Septiembre';
      break;
    case 'Oct':
      month = 'Octubre';
      break;
    case 'Nov':
      month = 'Noviembre';
      break;
    case 'Dec':
      month = 'Diciembre';
      break;
    default:
      break;
  }

  return `${weekday} ${number} de ${month}`;
};
