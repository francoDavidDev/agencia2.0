import React from "react"
import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center pt-20  max-xl:flex-col-reverse gap-10 max-container">
     <div className="flex-1">
        <img src={offer} width={773} height={687} 
        className="object-contain w-full"/>
     </div>
     <div className="flex flex-1 flex-col">
     
        <h2 className="mt-10 font-palanquin capitalize  text-sky-blue text-4xl font-bold lg:max-w-lg"> 
          <span className="text-primary">Servicio Especial </span> 
           de Logos y Branding
        </h2>
        
        <p className="mt-4 lg:max-w-lg info-text ">
          Potencia tu marca con una identidad visual sólida y profesional. Un buen logo y un branding coherente no solo generan reconocimiento, sino que también comunican los valores y la esencia de tu negocio a tus clientes de manera efectiva.
        </p>

        <p className="mt-6 lg:max-lg info-text">
          Contratar un servicio de diseño de logos y branding te garantiza que tu marca destaque frente a la competencia, transmitiendo confianza y profesionalismo. Desde la paleta de colores hasta la tipografía, cada detalle se diseña estratégicamente para atraer y retener a tu público objetivo.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
         <Button label='Ver Detalles' />

         <Button label='Saber Más'
          backgroundColor='bg-white'
          borderColor='border-sky-blue'
          textColor='text-sky-blue'
          path='/MoreInfoBranding'/>
         </div>
         
      </div>
    </section>
  )
}

export default SpecialOffer
