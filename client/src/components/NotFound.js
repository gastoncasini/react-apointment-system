import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="page">
        <h2 className="page__title">404 not found </h2>

        <Link to={"/"}>
          <div className="page__link">Regresar a reservas</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
