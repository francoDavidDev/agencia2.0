import React from "react"
import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="comunity_manager" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl font-bold lg:max-w-lg">
          Te ofrecemos
          <span className="text-sky-blue"> un servicio</span>
          <span className="text-sky-blue"> de calidad </span>
          excepcional
        </h2>
        <p className="mt-4 lg:mx-w-lg info-text ">
          Impulsa tus ventas con nuestra gestión de comunidades. Nuestras estrategias personalizadas mejoran la interacción, aumentando el alcance de tu marca y generando más ingresos.
        </p>
        <p className="mt-6 lg:max-lg info-text ">
          Al optimizar la comunicación con tu audiencia, garantizamos un crecimiento constante, transformando seguidores en clientes y elevando tu rentabilidad.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Contáctanos" />
          <Button
            label="Saber más"
            backgroundColor="bg-white "
            borderColor="border-sky-blue"
            textColor="text-sky-blue"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8} // Cambiar esta imagen por algo relevante al servicio de Community Manager
          alt="Community Management"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
