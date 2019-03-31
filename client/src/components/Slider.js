import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='slider'>
        <div className='slider__controls'>
          <div className='slider__arrow'>{'<'}</div>
          <div className='slider__info'>{this.props.info}</div>
          <div className='slider__arrow'>{'>'}</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
