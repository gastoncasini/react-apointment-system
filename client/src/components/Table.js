import React, { Component } from 'react';
import TableCell from './TableCell';

import uuid from 'uuid';

class Table extends Component {
  state = {
    headings: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    cols: this.arrayOfObjs(6, 6, [
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
    ]),
  };

  /////// dev only////

  arrayOfObjs(nOfArrays, nOfItems, values) {
    const arr = [];
    for (let i = 0; i < nOfArrays; i++) {
      const subArr = [];
      for (let j = 0; j < nOfItems; j++) {
        const item = { content: values[i], id: uuid() };
        console.log(item);
        subArr.push(item);
      }

      arr.push(subArr);
    }

    return arr;
  }

  ////////////////////

  renderRow(row) {
    return (
      <tr className='table__row'>
        {row.map(cell => {
          if (typeof cell === 'object') {
            return <td className='table__cell'>{cell.content}</td>;
          } else {
            return <td className='table__cell'>{cell}</td>;
          }
        })}
      </tr>
    );
  }
  renderRows(rows) {
    return (
      <tbody>
        {rows.map(row => {
          return this.renderRow(row);
        })}
      </tbody>
    );
  }

  renderTable(headings, content) {
    return (
      <React.Fragment>
        {this.renderRow(headings)}
        {this.renderRows(content)}
      </React.Fragment>
    );
  }

  render() {
    this.arrayOfObjs(6, 6, [9, 10, 11, 12, 13, 14]);
    return (
      <table className='table'>
        {this.renderTable(this.state.headings, this.state.cols)}
      </table>
    );
  }
}

export default Table;
