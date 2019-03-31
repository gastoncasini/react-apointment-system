import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <table className='table'>
        <tr className='table__row'>
          <th className='table__header'>Lunes</th>
          <th className='table__header'>Martes</th>
          <th className='table__header'>Miercoles</th>
          <th className='table__header'>Jueves</th>
          <th className='table__header'>Viernes</th>
          <th className='table__header'>Sabado</th>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>09:00</td>
          <td className='table__cell'>09:00</td>
          <td className='table__cell'>09:00</td>
          <td className='table__cell'>09:00</td>
          <td className='table__cell'>09:00</td>
          <td className='table__cell'>09:00</td>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>10:00</td>
          <td className='table__cell'>10:00</td>
          <td className='table__cell'>10:00</td>
          <td className='table__cell'>10:00</td>
          <td className='table__cell'>10:00</td>
          <td className='table__cell'>10:00</td>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>11:00</td>
          <td className='table__cell'>11:00</td>
          <td className='table__cell'>11:00</td>
          <td className='table__cell'>11:00</td>
          <td className='table__cell'>11:00</td>
          <td className='table__cell'>11:00</td>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>12:00</td>
          <td className='table__cell'>12:00</td>
          <td className='table__cell'>12:00</td>
          <td className='table__cell'>12:00</td>
          <td className='table__cell'>12:00</td>
          <td className='table__cell'>12:00</td>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>13:00</td>
          <td className='table__cell'>13:00</td>
          <td className='table__cell'>13:00</td>
          <td className='table__cell'>13:00</td>
          <td className='table__cell'>13:00</td>
          <td className='table__cell'>13:00</td>
        </tr>
        <tr className='table__row'>
          <td className='table__cell'>14:00</td>
          <td className='table__cell'>14:00</td>
          <td className='table__cell'>14:00</td>
          <td className='table__cell'>14:00</td>
          <td className='table__cell'>14:00</td>
          <td className='table__cell'>14:00</td>
        </tr>
      </table>
    );
  }
}
