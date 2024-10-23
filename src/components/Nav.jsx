import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[100px] h-[70px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label_spanish}>
              <Link
                className="font-montserrat cursor-pointer hover:text-primary transition-all duration-200 leading-normal text-lg text-white hover:bg-white hover:rounded  px-2 py-1"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                to={item.name}
              >
                {item.label_spanish}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
