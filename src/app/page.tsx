import NavBar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection";
import BestProductsSection from "@/Components/BestProductsSection";
import Categories from "@/Components/Categories";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BestProductsSection />
      <Categories />
    </div>
  );
}
