import React, { Component } from 'react';

class ContacInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido: '',
      telefono: '',
      mail: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = changeEvent => {
    const value = changeEvent.target.value;
    const name = changeEvent.target.name;

    this.setState({ [name]: value });

    console.log('cagamos', name);
  };

  render() {
    return (
      <fieldset className={'contact-info'}>
        <legend>Completa tu infomacion de contacto</legend>
        {['nombre', 'apellido', 'mail', 'telefono'].map((name, index) => {
          const value = this.state[name];
          return (
            <label htmlFor='' className='contact-info__element' key={index}>
              <input
                autoComplete='off'
                name={name}
                type='text'
                onChange={this.handleChange}
                value={value}
                placeholder={name}
              />
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default ContacInfo;
