import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Header = () => {
  return (
    <section className="flex flex-col justify-around items-center w-full max-h-[970px] bg-[#d1efeb] flex-grow flex-shrink overflow-auto bg-[url('/circles.png')] bg-contain bg-repeat bg-center">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Header;
