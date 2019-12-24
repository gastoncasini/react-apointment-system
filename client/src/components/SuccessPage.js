import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SuccessPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="success">
        <h2 className="success__title">Reserva Realizada con exito</h2>

        <Link to={"/"}>
          <div className="success__link">Regresar a reservas</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SuccessPage;
