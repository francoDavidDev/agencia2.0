import React, { useState } from "react";
import Button from "../components/Button";
import menuImage from "../assets/works/menu-image.png"; // Cambiar por una imagen de menú o restaurante
import MoreInfoMenus from "./MoreInfoMenus";

const MenuSection = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <section
      id="menu_web"
      className="flex justify-between items-center flex-col gap-10 w-full max-container"
    >
      <div className="flex w-full flex-wrap flex-col md:flex-row-reverse gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl md:text-5xl font-bold lg:max-w-lg">
            <span className="text-sky-blue">Menú digital</span> personalizado
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-base md:text-lg">
            Un menú web no solo facilita el acceso a tu carta, sino que también
            permite actualizar platos y precios en tiempo real, ofreciendo a tus
            clientes la mejor experiencia posible. Aumenta la eficiencia de tu
            restaurante y atrae más clientes con un menú moderno y accesible.
          </p>
          <h3 className="text-sky-blue font-bold text-4xl md:text-5xl py-10">
            $50.000
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
            src={menuImage}
            alt="Menús Web para Restaurantes"
            width={570}
            height={522}
            className="object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Componente MoreInfoMenus con animación de acordeón */}
      <div
        className={`w-full overflow-hidden transition-all ease-in-out ${
          showMoreInfo
            ? "max-h-[100%] opacity-100 duration-500"
            : "max-h-0 opacity-0 duration-1000"
        }`}
      >
        <MoreInfoMenus />
      </div>
    </section>
  );
};

export default MenuSection;
