import React from "react";

const Display = (props) => {
  const date = props.info[0] !== "" ? props.info[0] : false;
  const time = props.info[1] !== "" ? props.info[1] : false;
  return (
    <header className="display">
      <p className="display__para">
        <span
          className={`display__info-container ${
            date ? "" : "display__info-container--hidden"
          }`}
        >
          reservando turno el dia
          <span className="display__info">{" " + props.info[0] + " "}</span>
        </span>
        <span
          className={`display__info-container ${
            time ? "" : "display__info-container--hidden"
          }`}
        >
          en el horario de
          <span className="display__info"> {props.info[1]}</span>
        </span>
      </p>
    </header>
  );
};

export default Display;
