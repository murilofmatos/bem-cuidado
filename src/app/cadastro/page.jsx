"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import useUserStore from "@/hooks/useUserStore";

function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erros, setErros] = useState({});
  const { setUser } = useUserStore(); // estado global zustand
  const router = new useRouter();
  const cadastroSchema = z.object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter no mínimo 3 caracteres" })
      .nonempty({ message: "O nome é obrigatório" }),

    email: z
      .string()
      .email({ message: "Digite um email válido." })
      .nonempty({ message: "O Email é obrigatório." }),

    senha: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres." })
      .regex(/[!@#$%*&^()<>?":{}|]/, {
        message: "A senha precisa de ao menos um caractere especial.",
      })
      .regex(/[A-Z]/, {
        message: "A senha deve ter ao menos uma letra maiúscula.",
      })
      .regex(/[a-z]/, {
        message: "A senha deve ter ao menos uma letra minúscula.",
      })
      .regex(/[0-9]/, { message: "A senha deve ter ao menos um número." }),

    confirmarSenha: z.string().refine(
      () => {
        return senha == confirmarSenha;
      },
      {
        path: ["confimarSenha"],
        message: "As senhas nao coincidem",
      }
    ),
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const resultado = cadastroSchema.safeParse({
      name,
      email,
      senha,
      confirmarSenha,
    });
    if (!resultado.success) {
      const errs = {};

      resultado.error.errors.forEach((err) => {
        errs[err.path[0]] = err.message;
      });
      setErros(errs); // guardando os erros

      return;
    }
    setErros({});

    try {
      if (senha === confirmarSenha) {
        const response = await fetch(
          "https://bem-cuidado-api.onrender.com/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, senha }),
          }
        );

        const data = await response.json();
        
        if (response.ok) {
          setUser({
            id: data.user.id,
            nome: data.user.name,
            email: data.user.email,
          });
  
          router.push("/");
        }
      }
    } catch (error) {
      let err = erros;
      err.cadastro = "Erro ao cadastrar.";
      setErros(err);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="nome"
            className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
          />
          {erros && (
            <span className="col-span-2 text-black font-bold">
              {erros.name}
            </span>
          )}
          <label htmlFor="email" className="col-span-2 text-xl">
            Email:
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
          />
          {erros && (
            <span className="col-span-2 text-black font-bold">
              {erros.email}
            </span>
          )}
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
          {erros && (
            <span className="col-span-2 text-black font-bold">
              {erros.senha}
            </span>
          )}
          <label htmlFor="confirmar senha" className="col-span-2 text-xl">
            Confirmar senha:
          </label>
          <input
            onChange={(e) => {
              setConfirmarSenha(e.target.value);
            }}
            type="password"
            id="confirmar senha"
            className="col-span-2 bg-blue-50 text-xl p-2 w-full rounded-2xl shadow-inner shadow-black/40 focus:outline-none focus:ring-blue-500 focus:ring-2 text-black font-medium"
          />
          {erros && (
            <span className="col-span-2 text-black font-bold">
              {erros.confirmarSenha}
            </span>
          )}
          <button
            type="submit"
            className="col-span-2 bg-blue-800 text-white shadow-2xs shadow-black/80 rounded-2xl w-fit px-12 py-2 text-2xl mx-auto mt-2 cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
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
      </form>
    </div>
  );
}

export default page;
