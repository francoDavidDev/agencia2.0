import React from "react";
import FaqMenus from "../components/FaqMenus";

const MoreInfoMenus = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-start border-t border-sky-blue ">
    <div className="flex flex-col-reverse justify-start items-start text-center md:flex-row-reverse gap-10">
      <div className="flex my-4 md:text-left flex-col">
        <p className="w-full info-text">
          Un menú web es una herramienta indispensable para restaurantes y
          locales de comida que buscan mejorar la experiencia de sus clientes.
          Permite que los usuarios accedan a la carta desde cualquier dispositivo,
          en cualquier momento, facilitando la decisión sobre qué ordenar antes
          de llegar al restaurante o incluso desde casa si se ofrece servicio de
          delivery.
        </p>

        <p className="mt-6 lg:max-lg info-text">
          Tener un menú web actualizado no solo agiliza los cambios en los
          platillos disponibles, sino que también mejora la visibilidad online del
          negocio. Además, permite integrar funciones como pedidos en línea, promociones
          especiales y fotos de alta calidad de cada platillo, atrayendo a más
          clientes y aumentando las ventas.
        </p>
      </div>
    </div>
    <div className="mt-11 flex m-auto flex-wrap gap-4">
      <FaqMenus />
    </div>
  </section>
  );
};

export default MoreInfoMenus;
