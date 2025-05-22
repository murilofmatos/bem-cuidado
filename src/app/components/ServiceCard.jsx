import React from "react";
import Image from "next/image";

function ServiceCard({ src, name }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#C9D6EF] p-4 rounded-3xl">
        <Image src={src} width={40} height={40} alt={name} className="w-full" />
      </div>
      <p className="font-bold text-center text-xl text-[#3F7FF6]">{name}</p>
    </div>
  );
}

export default ServiceCard;
