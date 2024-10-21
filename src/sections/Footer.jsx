import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="contacto" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Impulsa tu negocio con nuestras soluciones digitales personalizadas.
            Descubre estrategias innovadoras que se adaptan a tus necesidades y
            obtén beneficios exclusivos que llevarán tu presencia en línea al
            siguiente nivel.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div
                  key={icon.alt} // Asegúrate de tener una clave única para cada elemento
                  className="flex justify-center items-center w-12 h-12 cursor-pointer bg-white rounded-full transition duration-2y00 hover:scale-110 ease-in-out " // Cambia el color de fondo al hacer hover
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="transition duration-300 ease-in-out hover:scale-110" // Aumenta el tamaño del ícono al hacer hover
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li
                        className="text-white-400 mt-3 font-montserrat  text-base leanding-normal hover:text-sky-blue cursor-pointer"
                        key={link.name}
                      >
              
                       
                        <Link
                            className=""
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={500}
                            to={link.link}
                          >
                        {link.name}
                          </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
          <img
            src={copyrightSign}
            alt="copy right sing"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
