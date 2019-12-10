import React, { Component } from 'react';

export class FormBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const open = this.props.toggle === this.props.number ? true : false;
    return (
      <div className={`form__block ${open ? 'form__block--open' : ''}`}>
        <button
          className='form__block__button'
          type={'button'}
          onClick={() => {
            this.props.onClick(this.props.number);
          }}
        >
          <span
            className={`form__block__number${
              open ? ' form__block__number--active' : ''
            }`}
          >
            {this.props.number}
          </span>

          {this.props.info}
        </button>

        {open && this.props.children}
      </div>
    );
  }
}

export default FormBlock;
