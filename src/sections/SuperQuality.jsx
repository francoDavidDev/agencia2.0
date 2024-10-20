import React, { useState } from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";// Cambiar por una imagen relevante al Community Manager
import MoreInfoComunityManager from "./MoreInfoComunityManager";

const SuperQuality = () => {
  // Estado para controlar la visibilidad del componente MoreInfoComunityManager
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Función para alternar la visibilidad del componente
  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section
      id="comunity_manager"
      className="flex justify-between items-center flex-col gap-10 w-full max-container"
    >
      <div className="flex w-full gap-10">
      <div className="flex-1">
  <h2 className="mt-10 font-palanquin capitalize text-primary text-3xl md:text-4xl font-bold lg:max-w-lg">
    Servicio de
    <span className="text-sky-blue"> Community Manager</span>
  </h2>
  <p className="mt-4 lg:max-w-lg info-text text-base md:text-lg lg:text-lg">
    Mejora la interacción con tu audiencia y aumenta tus ventas con
    estrategias personalizadas que refuercen tu marca en las redes
    sociales. Nuestro servicio de Community Manager optimiza tu
    comunicación digital para generar más visibilidad y atraer a nuevos
    clientes.
  </p>
  <p className="mt-6 lg:max-lg info-text text-base md:text-lg lg:text-lg">
    Gestionamos tu comunidad online, creando contenido atractivo y
    aumentando la fidelización de tus clientes. Te ayudamos a convertir
    seguidores en clientes y a mantener una presencia constante en
    plataformas clave, impulsando así la rentabilidad de tu negocio.
  </p>
  <div className="mt-11 flex flex-wrap gap-4">
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

        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe8} // Cambiar esta imagen por algo relevante al servicio de Community Manager
            alt="Community Management"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>

      {/* Componente MoreInfoComunityManager con animación de acordeón */}
      <div
        className={`w-full overflow-hidden transition-all ease-in-out ${
          showMoreInfo
            ? "max-h-[100%] opacity-100 duration-500"
            : "max-h-0 opacity-0 duration-1000"
        }`}
      >
        <MoreInfoComunityManager />
      </div>
    </section>
  );
};

export default SuperQuality;
