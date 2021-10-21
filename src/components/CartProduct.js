import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function CartProduct({ id, title, image, price, shipPrice, amount }) {
  const { removeProduct, increaseAmount, decreaseAmount } = useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(price);

  const getTotalPrice = () => {
    const newPrice = (price * 1000 + shipPrice) * amount;
    setTotalPrice(newPrice);
  };

  useEffect(() => {
    getTotalPrice();
  }, [amount]);

  return (
    <article className="container">
      <div className="row py-4 px-5 border-top">
        <div className="col-1">
          <img src={image} alt={title} className="cart-pct-img" />
        </div>
        <div className="col-5 ps-5 my-auto">
          <Link to={`/product/${id}`} className="cart-pct-title">
            <h5 className="fw-bold">{title}</h5>
          </Link>
          {shipPrice === 0 ? (
            <p className="oportunity h6">Envío gratis</p>
          ) : (
            <p className="fs-6">Envío: ${shipPrice} </p>
          )}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => removeProduct(id)}
          >
            Eliminar
          </button>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center gap-3">
          <button className="fs-5 amount-btn">
            <AiOutlineMinusCircle
              className="mb-2"
              onClick={() => decreaseAmount(id)}
            />
          </button>
          <h5>{amount}</h5>
          <button className="fs-5 amount-btn">
            <AiOutlinePlusCircle
              className="mb-2"
              onClick={() => increaseAmount(id)}
            />
          </button>
        </div>
        <div className="col-3 my-auto text-center">
          <h4>$ {totalPrice} </h4>
        </div>
      </div>
    </article>
  );
}

export default CartProduct;
