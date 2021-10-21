import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, financing, shipPrice }) {
  const [over, setOver] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".pcts-section");
    section.addEventListener("mouseover", () => {
      setOver(false);
    });
  }, []);

  return (
    <Link
      to={`/product/${id}`}
      className="no-dec card p-3 shadow p-3 mb-5 bg-body rounded"
      onMouseOver={() => setOver(true)}
    >
      <div className="img-container">
        <img src={image} className="card-img-top m-auto no-hover" alt={title} />
      </div>
      <div className="card-body mt-2 pcts-body">
        <h5 className="card-title h4">${price}</h5>
        <p className="card-text fs-6">{financing}</p>
        {shipPrice === 0 && (
          <h6 className="fw-bolder lh-lg oportunity">Envío gratis</h6>
        )}
        {over && <p className="pct-name mb-0">{title}</p>}
      </div>
    </Link>
  );
}

export default Product;
