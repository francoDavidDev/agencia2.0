import React from "react";
import { offer } from "../assets/images";

import FaqComunityManager from "../components/FaqComunityManager";

const MoreInfoComunityManager = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-start border-t border-sky-blue ">
      <div className="flex flex-col-reverse justify-start items-start text-center  md:flex-row-reverse gap-10  ">
        <div className="flex  my-4   md:text-left flex-col">
          <p className="w-full  info-text  ">
            Un Community Manager es el encargado de gestionar la presencia de
            una marca o negocio en las redes sociales, creando y manteniendo la
            relación entre la empresa y su comunidad de usuarios. Su trabajo es
            fundamental para construir una imagen sólida en el entorno digital,
            ya que se encarga de interactuar con los seguidores, generar
            contenido atractivo y responder a consultas o comentarios.
          </p>

          <p className="mt-6 lg:max-lg info-text">
            Contratar un Community Manager permite aumentar la visibilidad de tu
            marca, fidelizar a tus clientes y generar nuevas oportunidades de
            negocio. Además, su gestión incluye el análisis de métricas para
            mejorar la estrategia de redes sociales, optimizando el contenido
            para lograr los mejores resultados. De esta forma, se garantiza una
            comunicación efectiva que conecta con los objetivos de la empresa y
            las necesidades de su audiencia.
          </p>
        </div>
      </div>
      <div className="mt-11 flex  m-auto flex-wrap gap-4">
        <FaqComunityManager />
      </div>
    </section>
  );
};

export default MoreInfoComunityManager;
