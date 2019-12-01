import React, { Component } from 'react';

import Display from './Display';
import FormsBlock from './FormsBlock';
import '../css/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentInfo: ['Martes 19 de Septiembre', '19:00', 'Gaston Casini'],
    };

    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day) {
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
    let current = this.state.currentInfo;
    let updated = [formatDay(day.toString()), ...current.slice(1)];
    this.setState({ currentInfo: updated });
  }

  render() {
    return (
      <div className='App'>
        <Display info={this.state.currentInfo} />
        <FormsBlock handleDayClick={this.handleDayClick}></FormsBlock>
      </div>
    );
  }
}

export default App;
