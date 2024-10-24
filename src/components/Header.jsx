import React, { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { NavMobile } from "./NavMobile";
import Nav from "./Nav";

const Header = () => {
  // Estado del header (activo al hacer scroll)
  const [isActive, setIsActive] = useState(false);
  
  // Estado para mostrar/ocultar el menú mobile
  const [navMobile, setNavMobile] = useState(false);

  // Evento para el scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isActive ? 'bg-pale-black py-[16px]' : 'bg-transparent py-[20px]'} fixed w-full z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      {/* Logo */}
      <a href="/">
        <img className='lg:h-[60px] h-[40px]' src={headerLogo} alt="logo_starke" />
      </a>

      {/* Menú de navegación - solo visible en pantallas grandes */}
      <nav className="hidden lg:flex">
        <Nav />
      </nav>

      {/* Botón de menú mobile - visible solo en pantallas pequeñas */}
      <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden z-50 cursor-pointer'>
        {navMobile ? (
          <RiCloseFill className='text-white text-3xl' />
        ) : (
          <RiMenu4Fill className='text-primary text-3xl' />
        )}
      </div>

      {/* Menú mobile - visible solo cuando navMobile es true */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-neutral-500 transition-transform transform ${navMobile ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      </div>
    </header>
  );
};

export default Header;
