import Comparison from "@/components/Comparison";

const Moonex = () => {
  return (
    <section className="flex-grow flex-shrink overflow-auto flex flex-col w-full max-h-[650px] font-firaCode  px-[1.25rem] sm:px-[3.5rem] lg:px-[5rem]">
      <p className="text-[45px] font-extrabold">
        <span className="text-white mr-4">Why</span>
        <span className="text-[#E4B40D] mr-4">MoonEX</span>
        <span className="text-white">?</span>
      </p>
      <Comparison />
    </section>
  );
};

export default Moonex;
