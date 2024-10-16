import React from "react";
import { offer } from "../assets/images";
import FaqMenus from "../components/FaqMenus";

const MoreInfoMenus = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-center px-10 bg-pale-black pt-20 gap-10 ">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 ">
        <div className="flex-1 justify-center">
          <img
            src={offer}
            width={773}
            height={687}
            className="object-contain w-full"
            alt="Oferta de menús digitales"
          />
        </div>
        <div className="flex flex-1 text-center md:text-left flex-col">
          <h2 className="mt-10 font-palanquin capitalize text-sky-blue text-4xl font-bold lg:max-w-lg">
            Menús 
            <span className="text-primary"> digitales </span>
            para restaurantes
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Nuestros menús digitales están diseñados específicamente para restaurantes que buscan modernizar su servicio. Estas soluciones permiten a los clientes acceder fácilmente a tus platos, promociones y ofertas especiales desde cualquier dispositivo.
          </p>

          <p className="mt-6 lg:max-lg info-text">
            Implementar un menú digital en tu restaurante no solo mejora la experiencia del cliente, sino que también aumenta tu visibilidad en línea. Es una herramienta clave para facilitar la interacción con tus clientes y optimizar el proceso de pedidos, ayudando a tu negocio a destacar en el mundo digital.
          </p>
        </div>
      </div>
      <div className="mt-11 flex flex-wrap gap-4">
        <FaqMenus />
      </div>
    </section>
  );
};

export default MoreInfoMenus;
