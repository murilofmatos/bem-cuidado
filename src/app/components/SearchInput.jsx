import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <div className="relative w-full flex items-center mb-4">
      <button className="w-8 absolute ml-1">
        <IoSearch color="#3F7FF6" size={30} />
      </button>
      <input
        className="bg-[#C9D6EF] rounded-full py-2 pl-10 pr-6 text-[#3F7FF6] shadow-inner shadow-black/50 w-full"
        type="text"
        placeholder="Busque um serviço..."
      />
    </div>
  );
}

export default SearchInput;
