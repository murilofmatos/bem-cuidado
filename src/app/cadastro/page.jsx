import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#4f7ff6] bg-gradient-to-br from-blue-400 to-[#4f7ff6] text-white w-72 grid grid-cols-2 p-4 gap-4 font-bold rounded-2xl shadow-2xl">
        <h1 className="text-3xl mb-5 underline underline-offset-2 ">
          Cadastro
        </h1>
        <Link href={"/"}>
          <IoIosArrowBack size={35} className="ml-auto" />
        </Link>
        <label htmlFor="nome" className="col-span-2 text-xl">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
        />
        <label htmlFor="email" className="col-span-2 text-xl">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
        />
        <label htmlFor="senha" className="col-span-2 text-xl">
          Senha:
        </label>
        <input
          type="password"
          id="senha"
          className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
        />
        <label htmlFor="confirmar senha" className="col-span-2 text-xl">
          Confirmar senha:
        </label>
        <input
          type="password"
          id="confirmar senha"
          className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
        />
        <button className="col-span-2 bg-blue-800 text-white shadow-2xs shadow-black/80 rounded-2xl w-fit px-12 py-2 text-2xl mx-auto mt-2">
          Cadastrar
        </button>
        <p className="col-span-2 text-center">
          Já possui cadastro?
          <br />
          <Link href={"/login"} className="underline underline-offset-2">
            Entre aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
