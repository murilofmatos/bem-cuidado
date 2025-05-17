import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function header() {
  return (
    <header className="bg-[#3f7ff6] flex justify-between items-center p-4 pt-8">
      <button>
        <HiOutlineMenuAlt2 color="white" size={40} />
      </button>
      <h1 className="text-white font-semibold text-2xl">BemCuidado</h1>
      <button>
        <CgProfile color="white" size={40} />
      </button>
    </header>
  );
}

export default header;
