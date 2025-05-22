"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUserStore from "@/hooks/useUserStore";

function header() {
  const { user } = useUserStore();
  const { clearUser } = useUserStore();
  return (
    <header className="bg-gradient-to-br from-[#3f7ff6] to-blue-700 flex justify-between items-center p-4 pt-8 shadow-lg">
      <button>
        <HiOutlineMenuAlt2 color="white" size={40} />
      </button>
      <h1 className="text-white font-semibold text-2xl">BemCuidado</h1>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <CgProfile color="white" size={40} className="cursor-pointer" />
        </DropdownMenuTrigger>

        {user.authenticated && (
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href={"/perfil"}>Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                clearUser();
              }}
            >
              sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
        {!user.authenticated && (
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href={"/login"}>Entrar</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href={"/cadastro"}>Cadastro</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </header>
  );
}

export default header;
