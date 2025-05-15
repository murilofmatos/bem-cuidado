import Image from "next/image";

function header() {
  return (
    <header className="bg-[#3f7ff6] flex justify-between items-center p-4 pt-8">
      <button>
        <Image
          src="/menu-icon.svg"
          width={50}
          height={50}
          alt="Icone de menu"
        />
      </button>
      <h1 className="text-white font-semibold text-2xl">BemCuidado</h1>
      <button>
        <Image
          src="/profile-icon.png"
          width={50}
          height={50}
          alt="Icone do perfil"
        />
      </button>
    </header>
  );
}

export default header;
