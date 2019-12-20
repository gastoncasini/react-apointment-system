import React, { Component } from "react";
import SubmitButton from "./SubmitButton";

class ContacInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: { nombre: "", apellido: "", telefono: "", email: "" },
      isActive: "",
      enableSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickInputs = this.clickInputs.bind(this);
    this.focusInputs = this.focusInputs.bind(this);
  }

  addClasses = (bemSelector, name) => {
    let classes = bemSelector;
    let isActive = this.state.isActive === name;
    let isFilled = this.state.inputs[name] !== "";
    if (isActive) {
      classes += ` ${bemSelector}--active`;
    }
    if (isFilled) {
      classes += ` ${bemSelector}--filled`;
    }

    return classes;
  };

  enableSubmit = (obj) => {
    const keys = Object.keys(obj);
    for (const key in keys) {
      if (obj[keys[key]] === "") {
        return false;
      }
    }

    return true;
  };

  clickInputs = (clickEvent) => {
    this.setState({ isActive: clickEvent.target.name });
  };

  focusInputs = (focusEvent) => {
    this.setState({ isActive: focusEvent.target.name });
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const name = changeEvent.target.name;
    const newInputs = { ...this.state.inputs };
    newInputs[name] = value;

    const enable = this.enableSubmit(newInputs);

    this.setState({ inputs: newInputs, enableSubmit: enable });
  };

  clickSubmit = (clickEvent) => {
    const { inputs } = this.state;
    this.props.setContactInfo(inputs);
    console.log(inputs);
  };

  render() {
    return (
      <React.Fragment>
        <fieldset className={"contact-info"}>
          <legend>Completa tu infomacion de contacto</legend>
          {["nombre", "apellido", "email", "telefono"].map((name, index) => {
            const value = this.state[name];
            const classes = [
              "contact-info__label",
              "contact-info__input__placeholder",
              "contact-info__input__border"
            ].map((bem) => {
              return this.addClasses(bem, name);
            });

            return (
              <div className="contact-info__element" key={index}>
                <label className={classes[0]}>{name}</label>
                <div className={classes[1]}>{name}</div>
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
              </div>
            );
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
