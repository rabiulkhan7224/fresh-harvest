import AboutPage from "@/components/Abouts";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import Navabar from "@/components/ui/Navabar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     
      <Banner />
      <Products />
      <AboutPage>
        
      </AboutPage>
    </div>
  );
}
