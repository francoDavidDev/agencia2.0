import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full   flex xl:flex-row flex-col bg  justify-center min-h-screen  gap-10 max-container  p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full mx-xl:padding-x pt-28">
        <p className="text-sm  sm:text-md md:text-xl font-montserrat text-sky-blue">
          Creciendo con contenido digital
        </p>
        <h1 className="mt-10 font-palanquin  text-3xl sm:text-4xl  md:text-8xl mx-sm:text-[72px] max-sm:leading-[82px] font-bold z-100 ">
          <span className="xl:bg-pale-black  text-white xl:whitespace-nowrap relative z-10 pr-10">
            Visibilidad Web
          </span>
          
        </h1>
        <p className="font-montserrat text-sky-blue  text-sm  sm:text-md md:text-xl  leanding-8 mt-14 mb-14 sm:max-w-sm">
          Supervise sus redes, contenido y negocio para facturar en plataformas
          digitales.
        </p>
    
      
        <button
          // Añadimos el evento onClick
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-sky-blue text-white rounded-full hover:text-sky-blue hover:bg-white hover:border-sky-blue"
          >
            Saber más
           <img src={arrowRight} alt="" />

          </button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index.label}>
              <p className="text-4xl font-palanquin font-bold text-primary">{stat.value}</p>
              <p className="leanding-7 font-montserrat text-sky-blue">
                {" "}
                {stat.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
        <img
          src={bigShoeImg}
          alt="show collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => {
            return (
              <div key={shoe}>
                <ShoeCard
                  index={index}
                  imgURL={shoe}
                  changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
