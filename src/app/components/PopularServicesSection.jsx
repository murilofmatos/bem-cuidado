import React from "react";
import WorkerCard from "./WorkerCard";

function PopularServicesSection() {
  return (
    <div className="font-bold text-2xl text-[#3F7FF6] my-4">
      <h2 className="mb-4">Top Avaliados</h2>
      <div>
        <WorkerCard
          name={"Carla H."}
          service={"Chef"}
          src={"/fem-chef.png"}
          rating="4.8"
        />
      </div>
    </div>
  );
}

export default PopularServicesSection;
