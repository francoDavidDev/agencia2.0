import React from "react";
import { offer } from "../assets/images";



import FaqComercialWebsite from "../components/FaqComercialWebsite";

const MoreInfonWebs = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-center px-10 bg-pale-black  pt-20 gap-10 ">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 ">
        <div className="flex-1 justify-center">
          <img
            src={offer}
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1  text-center md:text-left flex-col">
          <h2 className="mt-10 font-palanquin capitalize text-sky-blue text-4xl font-bold lg:max-w-lg">
            Páginas
            <span className="text-primary"> webs para </span>
            Comerciantes
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Las páginas webs para comerciantes están diseñadas específicamente
            para comercios locales. Estas soluciones permiten dar un pequeño
            paso hacia la digitalización de tu negocio, ayudándote a
            profesionalizarlo aún más y mejorar tu presencia online.
          </p>

          <p className="mt-6 lg:max-lg info-text">
            Contratar un servicio de diseño web para comerciantes garantiza que
            tu negocio local destaque en el entorno digital, brindándote la
            oportunidad de atraer nuevos clientes y optimizar tus operaciones.
            Estas webs están pensadas para facilitar la transición hacia una
            mayor digitalización de tu comercio.
          </p>
        </div>

        
      </div>
      <div className="mt-11 flex flex-wrap gap-4">
          <FaqComercialWebsite />
        </div>
    </section>
  );
};

export default MoreInfonWebs;
