import React, { Component } from "react";
import Modal from "./Modal";
import { formatDay } from "../utils";

class SubmitModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  close() {
    this.props.toggleModal("submit");
  }

  confirm() {
    console.log("submit");
    this.props.submit();

    this.props.toggleModal("submit");
  }

  render() {
    const { submitInfo } = this.props;
    const { nombre, apellido, telefono, email } = submitInfo.contactInfo;
    const date = formatDay(submitInfo.date, "display");

    return (
      <Modal>
        <div className="modal__info">
          <div className="modal__info__elements-container">
            <h2 className="modal__info__title">Confirma tu reserva</h2>
            <div className="mo1dal__info__element">
              <p className="modal__info__text-container">
                <span className="modal__info__text">Nombre: </span>
                <span className="modal__info__dinamic-text">{`${nombre} ${apellido} `}</span>
              </p>
            </div>
            <div className="modal__info__element">
              <p className="modal__info__text-container">
                <span className="modal__info__text">Telefono: </span>
                <span className="modal__info__dinamic-text">{telefono}</span>
              </p>
            </div>
            <div className="modal__info__element">
              <p className="modal__info__text-container">
                <span className="modal__info__text">Email:</span>
                <span className="modal__info__dinamic-text">{email}</span>
              </p>
            </div>
            <div className="modal__info__element">
              <p className="modal__info__text-container">
                <span className="modal__info__text">Reserva:</span>
                <span className="modal__info__dinamic-text">{`${date}, ${submitInfo.time}`}</span>
              </p>
            </div>
          </div>
          <div className="modal__controls">
            <button
              type="button"
              className="modal__controls__button"
              onClick={this.close}
            >
              CANCEL
            </button>
            <button
              type="button"
              className="modal__controls__button"
              onClick={this.confirm}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SubmitModal;
