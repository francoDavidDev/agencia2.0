import React from "react";
import Button from "../components/Button";
import menuImage from "../assets/works/menu-image.png"; // Cambiar por una imagen de menú o restaurante

const MenuSection = () => {
  return (
    <section id="about-us" className="flex justify-between flex-row-reverse items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl font-bold lg:max-w-lg">
          Menú web <span className="text-sky-blue">de calidad</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Atrae más clientes con un menú digital interactivo y atractivo. Facilita que tus clientes accedan a tus platos, promociones y detalles desde cualquier dispositivo.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Con nuestros menús web optimizados, no solo modernizas tu negocio, sino que también aumentas tus ventas y visibilidad en línea, brindando una experiencia profesional y eficiente a tus clientes.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Contáctanos"  />
          <Button
            label="Saber más"
            backgroundColor="bg-white"
            borderColor="border-sky-blue"
            textColor="text-sky-blue"
            path ='/MoreInfoWebs'
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center rounded-xl items-center">
        <img
          src={menuImage} // Cambiar esta imagen por una relevante de menús o restaurante
          alt="Menú web para restaurantes"
          width={570}
          height={522}
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default MenuSection;
