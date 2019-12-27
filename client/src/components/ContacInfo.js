import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import { validateInput } from "../utils";

class ContacInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        nombre: { value: "", isValid: null },
        apellido: { value: "", isValid: null },
        telefono: { value: "", isValid: null },
        email: { value: "", isValid: null }
      },
      isActive: "",
      enableSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickInputs = this.clickInputs.bind(this);
    this.focusInputs = this.focusInputs.bind(this);
    this.addClasses = this.addClasses.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  addClasses(bemSelector, name) {
    let classes = bemSelector;
    let isActive = this.state.isActive === name;
    let isFilled = this.state.inputs[name].value !== "";
    let isValid = this.state.inputs[name].isValid;

    if (isActive) {
      classes += ` ${bemSelector}--active`;
    }
    if (isFilled) {
      classes += ` ${bemSelector}--filled`;
    }
    if (!isValid && isValid !== null) {
      classes += ` ${bemSelector}--invalid`;
    }

    return classes;
  }

  setClasses(name) {
    let classes = [
      "contact-info__label",
      "contact-info__input__placeholder",
      "contact-info__input__border",
      "contact-info__input__invalid-txt"
    ].map((inputClass) => {
      return this.addClasses(inputClass, name);
    });

    return classes;
  }

  enableSubmit(obj) {
    const keys = Object.keys(obj);
    for (const key in keys) {
      if (!obj[keys[key]].isValid) {
        return false;
      }
    }

    return true;
  }

  clickInputs(clickEvent) {
    this.setState({ isActive: clickEvent.target.name });
  }

  focusInputs(focusEvent) {
    this.setState({ isActive: focusEvent.target.name });
  }

  handleChange(changeEvent) {
    const name = changeEvent.target.name;
    const value = changeEvent.target.value;
    const newInputs = { ...this.state.inputs };

    newInputs[name].value = value;
    newInputs[name].isValid = validateInput(value, name);

    const enable = this.enableSubmit(newInputs);

    this.setState({ inputs: newInputs, enableSubmit: enable });
  }

  clickSubmit(clickEvent) {
    const { inputs } = this.state;
    let contactInfo = {
      nombre: inputs.nombre.value,
      apellido: inputs.apellido.value,
      email: inputs.email.value,
      telefono: inputs.telefono.value
    };
    console.log(contactInfo);
    this.props.setContactInfo(contactInfo);
    this.props.toggleBlocks(null);
    this.props.toggleModal("submit");
  }

  renderInputs() {
    const inputs = [
      {
        name: "nombre",
        placeholder: "tu nombre",
        invalidTxt: "no se pueden usar caracteres especiales",
        classes: this.setClasses("nombre")
      },
      {
        name: "apellido",
        placeholder: "tu apellido",
        invalidTxt: "no se pueden usar caracteres especiales",
        classes: this.setClasses("apellido")
      },
      {
        name: "email",
        placeholder: "ejemplo@mail.com",
        invalidTxt: "email invalido",
        classes: this.setClasses("email")
      },
      {
        name: "telefono",
        placeholder: "0000-0000",
        invalidTxt: "telefono invalido",
        classes: this.setClasses("telefono")
      }
    ];

    const elements = inputs.map(
      ({ name, placeholder, classes, invalidTxt }, index) => {
        const value = this.state.inputs[name].value;

        return (
          <div className="contact-info__element" key={index}>
            <label className={classes[0]}>{name}</label>
            <div className={classes[1]}>{placeholder}</div>
            <input
              autoComplete="off"
              type="text"
              onClick={this.clickInputs}
              onChange={this.handleChange}
              onFocus={this.focusInputs}
              value={value}
              className={"contact-info__input"}
              name={name}
            />
            <hr className={classes[2]} />
            <span className={classes[3]}>{invalidTxt}</span>
          </div>
        );
      }
    );

    return elements;
  }

  render() {
    const inputs = this.renderInputs();
    return (
      <React.Fragment>
        <fieldset className={"contact-info"}>
          <legend>Completa tu infomacion de contacto</legend>
          {inputs.map((input) => {
            return input;
          })}
          <SubmitButton
            isEnabled={this.state.enableSubmit}
            setContactInfo={this.setContactInfo}
            onClick={this.clickSubmit}
          />
        </fieldset>
      </React.Fragment>
    );
  }
}

export default ContacInfo;
