"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

function page() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/");
      }
      let err = errors;
      err.login = data.errorMessage;
    } catch (error) {
      let err = errors;
      err.login = "Erro ao logar.";
      setErrors(err);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#4f7ff6] bg-gradient-to-br from-blue-400 to-[#4f7ff6] text-white w-72 grid grid-cols-2 p-4 gap-4 font-bold rounded-2xl shadow-2xl">
          <h1 className="text-3xl mb-5 underline underline-offset-2 ">Login</h1>
          <span className="text-black font-bold">{errors.login}</span>
          <Link href={"/"}>
            <IoIosArrowBack size={35} className="ml-auto" />
          </Link>
          <label htmlFor="email" className="col-span-2 text-xl">
            Email:
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            id="email"
            className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
          />
          <label htmlFor="senha" className="col-span-2 text-xl">
            Senha:
          </label>
          <input
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            type="password"
            id="senha"
            className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
          />
          <a
            href=""
            className="col-span-2 ml-auto underline underline-offset-2"
          >
            Esqueceu a senha?
          </a>
          <button
            type="submit"
            className="col-span-2 bg-blue-800 text-white shadow-2xs shadow-black/80 rounded-2xl w-fit px-12 py-2 text-2xl mx-auto mt-2"
          >
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
      </form>
    </div>
  );
}

export default page;
