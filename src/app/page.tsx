import Header from "@/components/Header";
import Moonex from "@/components/Moonex";
import Features from "@/components/Features";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-stretch items-center w-full h-full bg-[#071624]"
    >
      <Header />
      <Moonex />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}
