import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";

const Hero = () => {
  return (
    <article className="grid grid-rows-[1fr] grid-cols-[1fr] text-gray-700 w-full h-auto lg:grid-rows-[auto] lg:grid-cols-[7fr_1fr_2fr]">
      {/* Left Section */}
      <HeroLeft />

      {/* Middle Section */}
      <section className="hidden lg:block p-4 col-start-2 row-start-1">
        {/*   <h2>Middle Section</h2>
        <p>
          This is the middle section. It appears in the second column at 1024px
          or larger.
        </p> */}
      </section>

      {/* Right Section */}
      <HeroRight />
    </article>
  );
};

export default Hero;
