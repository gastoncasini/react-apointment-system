import React, { Component } from 'react';

class ContacInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      mail: '',
      isActive: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.activeInputs = this.activeInputs.bind(this);
  }

  activeInputs = clickEvent => {
    this.setState({ isActive: clickEvent.target.name });
  };

  handleChange = changeEvent => {
    const value = changeEvent.target.value;
    const name = changeEvent.target.name;

    this.setState({ [name]: value });
  };

  addClasses = (bemSelector, name) => {
    let classes = bemSelector;
    let isActive = this.state.isActive === name;
    let isFilled = this.state[name] !== '';
    if (isActive) {
      classes += ` ${bemSelector}--active`;
    }
    if (isFilled) {
      classes += ` ${bemSelector}--filled`;
    }

    return classes;
  };

  render() {
    return (
      <fieldset className={'contact-info'}>
        <legend>Completa tu infomacion de contacto</legend>
        {['nombre', 'apellido', 'mail', 'telefono'].map((name, index) => {
          const value = this.state[name];
          const classes = [
            'contact-info__label',
            'contact-info__input__placeholder',
            'contact-info__input__border',
          ].map(bem => {
            return this.addClasses(bem, name);
          });
          console.log(classes, this.state);

          return (
            <div className='contact-info__element' key={index}>
              <label className={classes[0]}>{name}</label>
              <div className={classes[1]}>{name}</div>
              <input
                autoComplete='off'
                type='text'
                onClick={this.activeInputs}
                onChange={this.handleChange}
                value={value}
                className={'contact-info__input'}
                name={name}
              />
              <hr className={classes[2]} />
            </div>
          );
        })}
      </fieldset>
    );
  }
}

export default ContacInfo;
