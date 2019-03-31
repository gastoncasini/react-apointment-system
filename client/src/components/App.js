import React, { Component } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Table from './Table';
import '../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableSize: {
        days: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
      },
    };
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Slider info='25 al 30 de marzo '>
          <Table />
        </Slider>
      </div>
    );
  }
}

export default App;
