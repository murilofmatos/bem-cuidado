"use client";
import React from "react";
import { useState, use, useEffect } from "react";
import Header from "@/app/components/Header";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

function page({ params }) {
  const [worker, setWorker] = useState({});
  const [errors, setErrors] = useState({});
  const { id } = use(params);
  async function fetchWorkerData() {
    try {
      console.log(id);
      const response = await fetch(
        `https://bem-cuidado-api.onrender.com/workers/${id}`
      );
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        setWorker(data);
      }
    } catch (error) {
      console.error("Error fetching worker data:", error);
    }
  }
  useEffect(() => {
    fetchWorkerData();
    console.log("teste");
  }, []);

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="bg-[#4f7ff6] bg-gradient-to-br from-blue-400 to-[#4f7ff6] text-white w-full p-2 rounded-2xl shadow-lg shadow-black/40 grid grid-cols-2 gap-x-4 items-center">
          <div className="flex gap-2 col-span-6">
            <Image
              src={"/fem-chef.png"}
              width={100}
              height={100}
              alt="Foto do prestador de serviço"
              className="rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-bold ">{worker.name}</h2>
              <p className="text-lg ">{worker.service}</p>
              <div className="bg-gray-200 px-4 py-1 rounded-full flex items-center gap-3 w-fit mt-2">
                <FaStar size={15} className="text-yellow-500" />
                <p className="font-bold text-black">{worker.rating}</p>
              </div>
            </div>
          </div>
          <p className="mt-2 col-span-4">{worker.description}</p>
          <button className="bg-green-600 h-fit px-4 py-2 rounded-2xl font-bold cursor-pointer ">
            Contratar
          </button>
        </div>

        {/* <div>
          <h2 className="text-2xl font-bold text-[#3F7FF6] my-4">Avaliações</h2>
          <div className="">
            <h3>Murilo Francisco Matos</h3>
            <p className="font-bold">
              Serviço muito bom, foi pontual e cuidadoso. Recomendo!
            </p>
          </div>
        </div> */}
      </main>
    </div>
  );
}

export default page;
