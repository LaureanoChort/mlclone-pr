import React from "react";
import { useGlobalContext } from "../context";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, total, amount } = useGlobalContext();

  if (cart.length <= 0) {
    return (
      <section className="container w-100 text-center mt-5">
        <h2>El carrito esta vacío</h2>
        <Link to="/" className="btn btn-outline-success mt-3">
          Volver al Inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="section w-100 d-flex flex-column align-items-center gap-3">
      <h2 className="mt-5">Carrito ({amount})</h2>
      <div className="container bg-body py-5 shadow-sm p-3 mb-5 bg-body rounded">
        {cart.map((product, index) => {
          return <CartProduct key={index} {...product} />;
        })}
      </div>
      <div className="text-center d-flex flex-column mb-5">
        <h3>Total con envío $ {total}</h3>
        <button className="btn bg-primary border-primary text-white mt-2">
          Continuar compra
        </button>
        <Link to="/" className="btn btn-sm btn-outline-success mt-3">
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}

export default Cart;
