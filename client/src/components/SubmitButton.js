import React from 'react';

export default function SubmitButton(props) {
  const innertext = props.isEnabled ? 'Submit' : 'Completa todos los campos ';
  const isOpen = props.toggle === props.number ? '' : 'form__block--hidden';

  return (
    <div className={`form__block ${isOpen}`}>
      <button disabled={!props.isEnabled} className={`form__block__submit-btn`}>
        <span className={'form__block__submit-btn__text'}>{innertext}</span>
      </button>
    </div>
  );
}
