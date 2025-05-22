import React from "react";
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

function ComentaryCard() {
  return (
    <div className="border border-gray-300 rounded-2xl shadow-lg shadow-black/20 p-3 gap-2 mt-4 grid grid-cols-7">
      <Image
        src={"/murilo-avatar.jpg"}
        width={100}
        height={100}
        alt="Avatar de um comentário"
        className="rounded-full"
      />
      <div className="flex justify-between items-center col-span-6 col-start-2">
        <h3 className="font-bold">Murilo Francisco Matos</h3>
        <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1 w-fit mt-2">
          <FaStar size={15} className="text-yellow-500" />
          <FaStar size={15} className="text-yellow-500" />
          <FaStar size={15} className="text-yellow-500" />
          <FaStar size={15} className="text-yellow-500" />
          <FaStarHalf size={15} className="text-yellow-500" />
        </div>
      </div>
      <p className="col-span-6 col-start-2">
        Serviço muito bom, foi pontual e cuidadoso. Recomendo!
      </p>
    </div>
  );
}

export default ComentaryCard;
