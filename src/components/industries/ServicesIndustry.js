import React from "react";

const ServicesIndustry = ({ service_heading, benefits }) => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto">
        <h2 className="text-left mb-4 text-3xl font-bold">{service_heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits && benefits.map(service => (
            <div key={service.id} className="text-left mb-4 mt-4 p-4 rounded-xl bg-[#BDBABA24]">
              <div className="service-icon mb-3 text-center text-orange-500 text-3xl">{service.icon}</div>
              <h4 className="font-bold text-lg">{service.title}</h4>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndustry;
