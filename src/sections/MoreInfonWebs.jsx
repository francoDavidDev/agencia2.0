import React from "react";
import { offer } from "../assets/images";



import FaqComercialWebsite from "../components/FaqComercialWebsite";

const MoreInfonWebs = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-start border-t border-sky-blue ">
      <div className="flex flex-col-reverse justify-start items-start text-center  md:flex-row-reverse gap-10  ">
   
        <div className="flex  my-4   md:text-left flex-col">
      
          <p className="w-full  info-text  ">
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
      <div className="mt-11 flex  m-auto flex-wrap gap-4">
          <FaqComercialWebsite />
        </div>
    </section>
  );
};

export default MoreInfonWebs;
