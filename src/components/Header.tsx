import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Header = () => {
  return (
    <section className="flex flex-col w-full max-h-[970px] flex-grow flex-shrink overflow-auto bg-[url('/circles.png'),url('/bg.png')] bg-no-repeat bg-[contain,cover] bg-center px-[1.25rem] sm:px-[3.5rem] lg:px-[5rem] pt-[0.625rem] sm:pt-[1.75rem] lg:pt-[2.5rem]">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Header;
