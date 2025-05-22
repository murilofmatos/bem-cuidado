import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

function WorkerCard({ src, name, service, rating }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={src}
          width={100}
          height={100}
          alt="Foto do prestador de serviço"
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3">
          <p className="font-bold text-2xl text-[#145ADD]">{name}</p>
          <p className="text-lg text-[#3F7FF6]">{service}</p>
        </div>
      </div>
      <div className="bg-gray-200 px-3 py-1 rounded-full flex gap-3">
        <FaStar size={30} className="text-yellow-500" />
        <p className="font-bold text-black">{rating}</p>
      </div>
    </div>
  );
}

export default WorkerCard;
