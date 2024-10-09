import React from "react";

//import data
import { Accordion } from "./Accordion";
import { FAQ_BRANDING } from "../constants/faq/branding";
//import components


const FaqBranding = () => {
  // desctructure faq data
  const { icon, title, accordions } = FAQ_BRANDING;

  return (
    <section
      className=" 
 h-auto"
    >
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center h-auto lg:pt-6  ">
        {/*  section title */}
        <div
          name="preguntas"
          className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[450px] mx-auto px-4 lg:px-0 "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          {/*<img className='lg:hidden ' src={icon} alt="" />*/}
          <h5 className=" text-primary  mx-auto text-2xl sm:text-3xl py-5 uppercase font-semibold text-center ">{title} </h5>
        </div>
        {/* acordion list */}
        <div
          className="flex flex-col gap-y-4 px-4 "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index}></Accordion>;
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqBranding;
