import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#4f7ff6] bg-gradient-to-br from-blue-400 to-[#4f7ff6] text-white w-72 grid grid-cols-2 p-4 gap-4 font-bold rounded-2xl shadow-2xl">
        <h1 className="text-3xl mb-5 underline underline-offset-2 ">Login</h1>
        <Link href={"/"}>
          <IoIosArrowBack size={35} className="ml-auto" />
        </Link>
        <label htmlFor="email" className="col-span-2 text-xl">
          Email:
        </label>
        <input
          type="text"
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
        <a href="" className="col-span-2 ml-auto underline underline-offset-2">
          Esqueceu a senha?
        </a>
        <button className="col-span-2 bg-blue-800 text-white shadow-2xs shadow-black/80 rounded-2xl w-fit px-12 py-2 text-2xl mx-auto mt-2">
          Entrar
        </button>
        <p className="col-span-2 text-center">
          Não possui uma conta?
          <br />
          <Link href={"/cadastro"} className="underline underline-offset-2">
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
