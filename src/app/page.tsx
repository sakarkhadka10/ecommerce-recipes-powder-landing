import NavBar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection";
import BestProductsSection from "@/Components/BestProductsSection";
import Categories from "@/Components/Categories";
import OurBlogs from "@/Components/OurBlogs";
import TestimonailsSection from "@/Components/TestimonailsSection";
import NewsLetter from "@/Components/NewsLetter";
import FooterSection from "@/Components/FooterSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BestProductsSection />
      <Categories />
      <OurBlogs />
      <TestimonailsSection />
      <NewsLetter />
      <FooterSection />
    </div>
  );
}
