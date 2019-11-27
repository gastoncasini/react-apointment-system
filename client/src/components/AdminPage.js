import React, { Component } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Table from './Table';
import '../css/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headings: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      schedule: this.fillRange(9, 14),
      week: 'week ',
    };
  }

  componentDidMount() {
    this.setState({
      week: 'current week',
    });
  }

  fillRange(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((item, index) => start + index);
  }

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Navbar />
        <Slider info={this.state.week}>
          <Table />
        </Slider>
      </div>
    );
  }
}

export default App;
