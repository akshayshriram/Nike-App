import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const SpecialServices = () => {
  return (
    <>
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service} {...service} />
        ))}
      </section>
    </>
  );
};

export default SpecialServices;
