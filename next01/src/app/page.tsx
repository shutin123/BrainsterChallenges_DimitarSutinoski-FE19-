import Image from "next/image";
import "../styles/main.css";
import Banner from "@/components/Banner";
import CategoryPicker from "@/components/CategoryPicker";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      <Banner />

      <CategoryPicker />

      <FeaturedProducts />

      <FeaturedBlogs />
    </div>
  );
}
