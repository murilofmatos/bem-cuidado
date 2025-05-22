import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

function WorkerCard({ src, name, service, rating, id }) {
  return (
    <Link href={"/worker/" + id}>
      <div className="grid grid-cols-6 gap-5">
        <div className="grid grid-cols-6 items-center col-span-4 gap-2">
          <Image
            src={src}
            width={100}
            height={100}
            alt="Foto do prestador de serviço"
            className="rounded-xl col-span-2"
          />
          <div className="flex flex-col col-span-4">
            <p className="font-bold text-2xl text-[#145ADD] overflow-ellipsis line-clamp-1">
              {name}
            </p>
            <p className="text-lg text-[#3F7FF6] overflow-ellipsis line-clamp-1">
              {service}
            </p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full flex gap-3">
            <FaStar size={30} className="text-yellow-500" />
            <p className="font-bold text-black">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WorkerCard;
