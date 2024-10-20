import React from "react";
import { Link } from "react-scroll";

const ServiceCard = ({ imgURL, label, subtext, name }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] bg-primary w-full rounded-[20px] shadow-3xl px-10 py-16 text-center sm:text-left">
      <h3 className="mt-5 font-palanquin text-2xl md:text-3xl lg:text-4xl leading-normal text-white font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-base md:text-lg lg:text-lg leading-normal text-sky-blue">
        {subtext}
      </p>

      <Link
        className="font-montserrat cursor-pointer hover:text-primary transition-all duration-200 leading-normal text-base md:text-lg lg:text-lg text-sky-blue"
        spy={true}
        smooth={true}
        offset={10}
        duration={300}
        to={name}
      >
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl underline hover:text-slate-gray transition-all duration-200 cursor-pointer py-5">
          Saber más
        </h3>
      </Link>
    </div>
  );
};

export default ServiceCard;
