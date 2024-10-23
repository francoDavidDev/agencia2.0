import React, { useState } from "react";
import Button from "../components/Button";
import {  webComerciantes,
} from "../assets/images";
import MoreInfonWebs from "./MoreInfonWebs";

const WebComerciantes = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section
      id="web_comerciantes"
      className="flex justify-between items-center flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-column flex-wrap sm:flex-row w-full  gap-10">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl md:text-5xl font-bold lg:max-w-lg">
            Webs
            <span className="text-sky-blue"> para </span>
            <span className="text-sky-blue"> Comerciantes</span>
          </h2>

          <p className="mt-4 text-white lg:max-w-lg text-sm md:text-base lg:text-lg">
            Diseñamos páginas web para pequeños comercios, ayudándote a dar el
            primer paso hacia la digitalización. Mejora tu visibilidad y conecta
            con más clientes.
          </p>

          <p className="mt-6 text-white lg:max-w-lg text-sm md:text-base lg:text-lg">
            Nuestra plataforma te ofrece una solución simple y accesible para
            que puedas gestionar tus productos, recibir pedidos online y crecer
            en el mundo digital.
          </p>

          <h3 className="text-sky-blue font-bold text-3xl md:text-4xl py-10">
            $50.000
          </h3>

          <div className="mt-11 md:justify-center flex flex-wrap gap-4 justify-center">
            <Button
              label="Contáctanos"
              path={"https://www.instagram.com/visibilidadweb/?hl=es-la"}
            />
            <button
              onClick={toggleMoreInfo}
              className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white text-sky-blue rounded-full hover:text-white hover:bg-sky-blue hover:border-white"
            >
              Saber más
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-col m-auto items-center">
          <p className="text-sky-blue italic underline text-sm py-3">
            Haz click en la imagen para ver como sería la web para comerciantes
          </p>
          <a target="_blank" href="https://frutocafe.vercel.app/">
            <img
              src={webComerciantes}
              alt="Web para Comerciantes"
              width={570}
              height={522}
              className="object-contain rounded-xl"
            />
          </a>
        </div>
      </div>

      {/* Componente MoreInfonWebs con animación de acordeón */}
      <div
        className={`w-full overflow-hidden transition-all ease-in-out ${
          showMoreInfo
            ? "max-h-[100%] opacity-100 duration-500"
            : "max-h-0 opacity-0 duration-1000"
        }`}
      >
        <MoreInfonWebs />
      </div>
    </section>
  );
};

export default WebComerciantes;
