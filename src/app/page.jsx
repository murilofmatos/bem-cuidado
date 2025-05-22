import SearchInput from "./components/SearchInput";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import PopularServicesSection from "./components/PopularServicesSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <SearchInput />
        <ServicesSection />
        <PopularServicesSection />
      </main>
    </div>
  );
}
