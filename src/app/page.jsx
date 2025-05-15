import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="relative w-fit flex">
          <button className="w-8 absolute mx-auto">
            <Image
              src="/search-icon.svg"
              width={50}
              height={50}
              alt="Search Icon"
              className="w-full h-1/2 object-cover"
            />
          </button>
          <input
            className="bg-[#C9D6EF] rounded-full py-2 px-8 text-[#3F7FF6]"
            type="text"
            placeholder="Busque um serviço..."
          />
        </div>
      </main>
    </div>
  );
}
