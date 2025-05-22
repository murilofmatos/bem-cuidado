"use client";
import React, { use } from "react";
import WorkerCard from "./WorkerCard";
import { useState, useEffect } from "react";

function PopularServicesSection() {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    async function fetchWorkers() {
      const response = await fetch(
        "https://bem-cuidado-api.onrender.com/workers/popular"
      );
      const data = await response.json();
      console.log(response);
      setWorkers(data);
    }
    fetchWorkers();
  }, []);
  return (
    <div className="font-bold text-2xl text-[#3F7FF6] my-4">
      <h2 className="mb-4">Top Avaliados</h2>
      <div className="flex flex-col gap-4">
        {workers.map((worker) => (
          <WorkerCard
            key={worker.id}
            name={worker.name}
            service={worker.service}
            src={"/fem-chef.png"}
            rating={worker.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularServicesSection;
