import Header from "@/components/Header";
import Moonex from "@/components/Moonex";
import Features from "@/components/Features";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full gap-1 bg-[#488e83] 
    font-raleway">
      <Header />
      <Moonex />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}
