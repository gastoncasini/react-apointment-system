import React, { Component } from 'react';

export class FormBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const { active } = this.state;
    return (
      <div className='form__block'>
        <button className='form__block__button' type={'button'}>
          <span className={`form__block__number${active ? '--active' : ''}`}>
            {this.props.number}
          </span>

          {this.props.info}
        </button>

        {this.props.children}
      </div>
    );
  }
}

export default FormBlock;
