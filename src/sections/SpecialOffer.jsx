import React, { useState } from "react";
import { brandingImg } from "../assets/images";
import Button from "../components/Button";
import MoreInfoBranding from "./MoreInfoBranding";

const SpecialOffer = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section
      id="comunity_manager"
      className="flex justify-between items-center flex-col gap-10 w-full max-container"
    >
      <div className="flex w-full flex-wrap flex-col md:flex-row-reverse gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl md:text-5xl font-bold lg:max-w-lg">
            Branding
            <span className="text-sky-blue"> & </span>
            Logos
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-base md:text-lg">
            Impulsa tus ventas con nuestra gestión de comunidades. Nuestras
            estrategias personalizadas mejoran la interacción, aumentando el
            alcance de tu marca y generando más ingresos.
          </p>
          <p className="mt-6 lg:max-lg info-text text-base md:text-lg">
            Al optimizar la comunicación con tu audiencia, garantizamos un
            crecimiento constante, transformando seguidores en clientes y
            elevando tu rentabilidad.
          </p>
          <h3 className="text-sky-blue font-bold text-4xl md:text-5xl py-10">
            $150.000
          </h3>
          <div className="mt-11 md:justify-center flex flex-wrap gap-4 justify-center">
            <Button
              label="Contáctanos"
              path={"https://www.instagram.com/visibilidadweb/?hl=es-la"}
            />
            <button
              onClick={toggleMoreInfo}
              className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-base md:text-lg leading-none bg-white text-sky-blue rounded-full hover:text-white hover:bg-sky-blue hover:border-white"
            >
              Saber más
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-col m-auto items-center">
          <img
            src={brandingImg}
            alt="Community Management"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>

      {/* Componente MoreInfoBranding con animación de acordeón */}
      <div
        className={`w-full overflow-hidden transition-all ease-in-out ${
          showMoreInfo
            ? "max-h-[100%] opacity-100 duration-500"
            : "max-h-0 opacity-0 duration-1000"
        }`}
      >
        <MoreInfoBranding />
      </div>
    </section>
  );
};

export default SpecialOffer;
