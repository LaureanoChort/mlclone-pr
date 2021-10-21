import React from "react";
import { products } from "../data";
import Product from "../components/Product";
import Carousel from "../components/Carousel";

console.log(products);

function Home() {
  return (
    <>
      <Carousel />
      <section className="container vw-100 p-4 pcts-section">
        <div className="row gap-4 d-flex justify-content-center">
          {products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
