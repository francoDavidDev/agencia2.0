import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";

//import data



export const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-primary fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setNavMobile(!navMobile)}
                className="text-white text-body-md cursor-pointer hover:text-white  duration-200 ease-in-out"
                to={item.name}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                {item.label_spanish}
              </Link>
            </li>
          );
        })}
      </ul>
      {/**buttons */}
      {/*<div className='-mt-44 flex justify-center gap-x-8 '> 
  <button className='btn btn-lg text-white'>Log in</button>
  <button className='btn btn-lg text-red-500' >Sing up</button>
</div>*/}
    </nav>
  );
};
