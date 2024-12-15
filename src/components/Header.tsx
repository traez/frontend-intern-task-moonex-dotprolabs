import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Header = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full">
      <Hero />
      <Navbar />
    </div>
  );
};

export default Header;
