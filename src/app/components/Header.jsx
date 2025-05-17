import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function header() {
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
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={"/login"}>Entrar</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/cadastro"}>Cadastro</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default header;
