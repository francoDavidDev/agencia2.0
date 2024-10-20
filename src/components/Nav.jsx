import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Nav = () => {
  // Estado para controlar la visibilidad de los servicios
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            // Verifica si el elemento tiene servicios
            if (item.servicios) {
              return (
                <li
                  key={item.name}
                  className="relative group" // Añadido 'group' para facilitar el uso de estilos
                  onMouseEnter={() => setShowServices(true)} // Muestra los servicios al entrar
                  onMouseLeave={() => setShowServices(false)} // Oculta los servicios al salir
                >
                  <span className="font-montserrat cursor-pointer hover:text-primary transition-all duration-200 leading-normal text-lg text-sky-blue">
                    Servicios
                  </span>
                  {showServices && (
                    <ul className="absolute left-0 h-auto  w-48 bg-white shadow-lg flex flex-col z-20">
                      {item.servicios.map((service) => (
                        <li key={service.name}>
                          <Link
                            className="block p-2 font-montserrat hover:text-primary transition-all duration-200 text-sky-blue"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={500}
                            to={service.name}
                          >
                            {service.label_spanish}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.label_spanish}>
                <Link
                  className="font-montserrat cursor-pointer hover:text-primary transition-all duration-200 leading-normal text-lg text-sky-blue"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  to={item.name}
                >
                  {item.label_spanish}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
