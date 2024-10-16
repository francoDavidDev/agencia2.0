import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section id="integrantes" className="max-container">
      <h3 className="font-palanquin text-center text-primary text-4xl font-bold">
        ¿Quiénes son
        <span className="text-sky-blue"> Integrantes </span>
        de
        <span className="text-sky-blue"> Visibilidad Web</span> ?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center text-white">
        Descubre quiénes forman parte de nuestro equipo y cómo su experiencia
        contribuye a ofrecer soluciones efectivas y personalizadas en el mundo
        digital.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly flex-wrap items-center max-lg:flex-col gap-14">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
