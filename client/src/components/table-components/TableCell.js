import React, { Component } from 'react';

export default class TableCell extends Component {
  render() {
    return <td className='table__cell'>{this.props.value}</td>;
  }
}
