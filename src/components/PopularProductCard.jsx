import React, { useState } from 'react';
import { FaQuestion, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PopularProductCard = ({ imgURL, name, price, services }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si la lista está desplegada

  const toggleServices = () => {
    setIsOpen(!isOpen); // Cambiar entre mostrar/ocultar
  };

  return (
    <div className='flex flex-1 flex-col w-full border-md max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[180px]  rounded-xl' />
      
      {/* Mostrar el enlace "Más Información" solo si el nombre es "web comercial" */}
      {name === 'Web Comerciantes' && (
        <div className='mt-8 flex justify-start overflow-hidden border-md'>
          <Link to={'/MoreInfoWebs'} className='flex gap-2.5'>
            <FaQuestion className='text-sky-blue mt-2' width={24} height={24} />
            <p className='font-monserrat text-xl leading-normal text-primary hover:underline cursor-pointer'>
              Más Información
            </p>
          </Link>
        </div>
      )}
      
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-white'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal text-white'>{price}</p>
      
      {/* Botón para desplegar/ocultar servicios */}
      {services && (
        <div className='mt-4'>
          <button 
            onClick={toggleServices} 
            className='flex items-center gap-2 text-sky-blue font-semibold'>
            {isOpen ? "Ocultar Servicios" : "Mostrar Servicios"}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Lista desplegable de servicios */}
          {isOpen && (
            <ul className='mt-2 list-disc list-inside text-white'>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PopularProductCard;
