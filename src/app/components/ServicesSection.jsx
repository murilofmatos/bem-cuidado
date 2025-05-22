import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <ServiceCard name="Faxina" src="/faxina.png" />
      <ServiceCard name="Cozinha" src="/cozinha.png" />
      <ServiceCard name="Cuidado com Idosos" src="/idosos.png" />
      <ServiceCard name="Pets" src="/pets.png" />
      <ServiceCard name="Babá" src="/baba.png" />
      <ServiceCard name="Pequenos Reparos" src="/reparos.png" />
    </div>
  );
}

export default ServicesSection;
