import React from "react";
import { offer } from "../assets/images";
import FaqBranding from "../components/FaqBranding";

const MoreInfoBranding = () => {
  return (
    <section className="flex justify-wrap flex-col md:flex-col items-start border-t border-sky-blue ">
      <div className="flex flex-col-reverse justify-start items-start text-center md:flex-row-reverse gap-10">
        <div className="flex my-4 md:text-left flex-col">
          <p className="w-full info-text">
            El branding es esencial para crear una identidad de marca sólida que
            permita a tu negocio destacarse en un mercado competitivo. A través
            de una estrategia de branding efectiva, tu empresa puede transmitir
            sus valores, misión y personalidad, conectando de manera auténtica
            con los clientes. Esto genera confianza y lealtad en la audiencia,
            lo que impacta directamente en las ventas y en el crecimiento de tu
            marca.
          </p>

          <p className="mt-6 lg:max-lg info-text">
            Invertir en branding aumenta la visibilidad y reconocimiento de tu
            negocio. Al definir una identidad coherente en todos los canales de
            comunicación, tu marca será fácilmente recordada. Además, el
            branding bien ejecutado ayuda a diferenciarse de la competencia,
            permitiendo que tu producto o servicio sea percibido como único.
            Fortalecer tu presencia online y offline a través del branding es
            clave para captar nuevos clientes y consolidar la relación con los
            actuales.
          </p>
        </div>
      </div>
      <div className="mt-11 flex m-auto flex-wrap gap-4">
        <FaqBranding />
      </div>
    </section>
  );
};

export default MoreInfoBranding;
