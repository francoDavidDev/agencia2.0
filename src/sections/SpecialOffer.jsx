import React, { useState } from "react"
import { brandingImg } from "../assets/images"
import Button from "../components/Button"
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons"
import MoreInfoBranding from "./MoreInfoBranding"

const SpecialOffer = () => {

  // Estado para controlar la visibilidad del componente MoreInfonWebs
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
    <div className="flex flex-row-reverse w-full gap-10">
      <div className="flex-1">
        <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl font-bold lg:max-w-lg">
          Branding
          <span className="text-sky-blue"> & </span>
        
          Logos
        </h2>
        <p className="mt-4 lg:mx-w-lg info-text">
          Impulsa tus ventas con nuestra gestión de comunidades. Nuestras
          estrategias personalizadas mejoran la interacción, aumentando el
          alcance de tu marca y generando más ingresos.
        </p>
        <p className="mt-6 lg:max-lg info-text">
          Al optimizar la comunicación con tu audiencia, garantizamos un
          crecimiento constante, transformando seguidores en clientes y
          elevando tu rentabilidad.
        </p>
        <h3 className="text-sky-blue font-bold text-4xl">$150.000</h3>
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
          src={brandingImg} // Cambiar esta imagen por algo relevante al servicio de Community Manager
          alt="Community Management"
          width={570}
          height={522}
          className="object-contain"
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
      <MoreInfoBranding />
    </div>
  </section>
  )
}

export default SpecialOffer
