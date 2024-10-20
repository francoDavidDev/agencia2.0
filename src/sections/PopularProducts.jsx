import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

function PopularProducts() {
  return (
    <section id="webs" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-primary">
          NUESTROS
          <span className="text-sky-blue"> PRECIOS </span>
          DE WEBS
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-white">
          Experimenta calidad y estilo de primera con nuestras selecciones más
          solicitadas. Descubre un mundo de confort, diseño y valor.
        </p>
      </div>
      <div className="mt-16  grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return <PopularProductCard key={product.name} {...product} />;
        })}
      </div>
    </section>
  );
}

export default PopularProducts;
