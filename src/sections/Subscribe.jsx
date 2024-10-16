import React from "react";
import Button from "../components/Button";

const Subcribe = () => {
  return (
    <section
      className="max-container bg-red flex justify-between items-center max-lg:flex-col gap-10"
      id="newsletter"
    >
      <h3 className="text-4xl leanding-[68px] text-primary lg:max-w-md font-palanquin font-bold ">
        Regístrate para <span className="text-sky-blue">Actualizaciones</span> &
        Boletines
      </h3>

      <div className="lg:max-w-[30%] min-w-[60%] flex  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-sky-blue rounded-full">
        <input type="text" placeholder="Coloca tu email" className="input  bg-pale-black" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Regístrarse" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
