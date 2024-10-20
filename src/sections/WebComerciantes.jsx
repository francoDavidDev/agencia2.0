import React, { useState } from "react";
import Button from "../components/Button";
import { coffeeShop } from "../assets/works";
import MoreInfonWebs from "./MoreInfonWebs";

const WebComerciantes = () => {
  // Estado para controlar la visibilidad del componente MoreInfonWebs
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Función para alternar la visibilidad del componente
  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section
      id="web_comerciantes"
      className="flex justify-between items-center flex-col gap-10 w-full max-container"
    >
      <div className="flex w-full gap-10">
        <div className="flex-1">
          <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl font-bold lg:max-w-xl">
            Webs
            <span className="text-sky-blue"> para </span>
            <span className="text-sky-blue"> Comerciantes</span>
          </h2>
          <p className="mt-4 lg:mx-w-lg info-text ">
            Diseñamos páginas web para pequeños comercios, ayudándote a dar el
            primer paso hacia la digitalización. Mejora tu visibilidad y conecta
            con más clientes.
          </p>
          <p className="mt-6 lg:max-lg info-text ">
            Nuestra plataforma te ofrece una solución simple y accesible para
            que puedas gestionar tus productos, recibir pedidos online y crecer
            en el mundo digital.
          </p>
          <h3 className="text-sky-blue font-bold text-4xl">$50.000</h3>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button
              label="Contáctanos"
              path={"https://www.instagram.com/visibilidadweb/?hl=es-la"}
            />
            <button
              onClick={toggleMoreInfo} // Añadimos el evento onClick
              className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white text-sky-blue rounded-full hover:text-white hover:bg-sky-blue hover:border-white"
            >
              Saber más
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={coffeeShop}
            alt="Web para Comerciantes"
            width={570}
            height={522}
            className="object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Componente MoreInfonWebs con animación de acordeón */}
      <div
        className={`w-full overflow-hidden transition-all ease-in-out ${
          showMoreInfo
            ? "max-h-[100%] opacity-100 duration-500" // Más rápida al abrir
            : "max-h-0 opacity-0 duration-1000" // Más lenta al cerrar
        }`}
      >
        <MoreInfonWebs />
      </div>
    </section>
  );
};

export default WebComerciantes;
