import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container mx-auto text-center pt-5">
      <h2>Ha ocurrido un error!</h2>
      <p>La página no existe.</p>
      <Link to="/" className="btn btn-sm btn-outline-success mt-3">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default Error;
