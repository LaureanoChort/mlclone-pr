import React, { useState, useEffect } from "react";
import { products } from "../data";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const {
    title,
    image,
    sold,
    price,
    financing,
    interest,
    shipPrice,
    rating,
    amount,
    description,
  } = product;
  const { cart, addToCart } = useGlobalContext();
  const [inCart, setInCart] = useState(false);

  const checkCart = () => {
    const productInCart = cart.find((item) => item.id === id);
    console.log(productInCart);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

  useEffect(() => {
    checkCart();
  }, [cart]);

  return (
    <>
      <section className="container vw-100 p-5">
        <div className="card m-auto p-4" style={{ maxWidth: "1100px" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-8">
              <img
                src={image}
                className="rounded-start single-pct-img"
                alt={title}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <p className="card-text mb-0">
                  <small className="text-muted ">Nuevo | {sold} vendidos</small>
                </p>
                <h3 className="card-title mb-0">{title}</h3>
                <div>
                  {Array(rating)
                    .fill()
                    .map((index) => {
                      return (
                        <AiFillStar key={index} style={{ color: "#3483fa" }} />
                      );
                    })}
                </div>
                <h1 className="mb-1">$ {price}</h1>
                <p>
                  <span>en </span>
                  <span className={!interest && "oportunity fs-5"}>
                    {financing}
                  </span>
                </p>
                {shipPrice === 0 ? (
                  <div className="oportunity h6 mb-0 d-flex">
                    <span>
                      <MdOutlineLocalShipping className="fs-5 mb-1 me-1" />
                    </span>
                    <p>Llega gratis el miércoles</p>
                  </div>
                ) : (
                  <div className="h6 mb-0 d-flex">
                    <span>
                      <MdOutlineLocalShipping className="fs-5 mb-1 me-1" />
                    </span>
                    <p>Llega el miércoles por ${shipPrice}</p>
                  </div>
                )}
                <p className="card-text">
                  <small className="text-muted">{description}</small>
                </p>
                <div className="d-flex gap-2">
                  <button className="btn bg-primary border-primary text-white">
                    Comprar ahora
                  </button>

                  {inCart ? (
                    <button className="btn btn-success">En carrito</button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          id,
                          title,
                          image,
                          price,
                          shipPrice,
                          amount,
                        });
                        setInCart(true);
                      }}
                    >
                      Agregar al carrito
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="btn btn-sm btn-outline-success mt-3">
            Volver al Inicio
          </Link>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
