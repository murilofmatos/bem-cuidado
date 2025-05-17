import SearchInput from "./components/SearchInput";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <SearchInput />
      </main>
    </div>
  );
}
