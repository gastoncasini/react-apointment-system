import React from "react";

export default function SubmitButton(props) {
  const innertext = props.isEnabled ? "Submit" : "Completa todos los campos ";

  return (
    <button
      type={"button"}
      disabled={!props.isEnabled}
      className={`contact-info__submit-btn`}
      onClick={props.onClick}
    >
      <span className={"contact-info__submit-btn__text"}>{innertext}</span>
    </button>
  );
}
