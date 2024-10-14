import React from "react"
import Button from "../components/Button"
import { coffeeShop } from "../assets/works"

const WebComerciantes = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-primary text-4xl font-bold lg:max-w-lg">
          Webs
          <span className="text-sky-blue"> para </span>
          <span className="text-sky-blue"> Comerciantes</span>
        </h2>
        <p className="mt-4 lg:mx-w-lg info-text ">
          Diseñamos páginas web para pequeños comercios, ayudándote a dar el primer paso hacia la digitalización. Mejora tu visibilidad y conecta con más clientes.
        </p>
        <p className="mt-6 lg:max-lg info-text ">
          Nuestra plataforma te ofrece una solución simple y accesible para que puedas gestionar tus productos, recibir pedidos online y crecer en el mundo digital.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Contáctanos" path={'https://www.instagram.com/visibilidadweb/?hl=es-la'} />
          <Button
            label="Saber más"
            backgroundColor="bg-white "
            borderColor="border-sky-blue"
            textColor="text-sky-blue"
            path='MoreInfoWebs'
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={coffeeShop} // Cambiar esta imagen por algo relevante a webs para pequeños negocios
          alt="Web para Comerciantes"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default WebComerciantes
