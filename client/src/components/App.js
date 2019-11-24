import React, { Component } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Table from './Table';
import '../css/app.css';
/* 
  // i need to know of every table cell 
  * content
  * day 
  * if it is taken 
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headings: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      schedule: this.fillRange(9, 14),
      weeks: ['week 1º', 'week 2º', 'week 3º', 'week 4º'],
    };
  }

  fillRange(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((item, index) => start + index);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Slider info={'25 al 30 de marzo '}>
          <Table />
        </Slider>
      </div>
    );
  }
}

export default App;
