import FeatureCells from "@/components/FeatureCells";

const Features = () => {
  return (
    <section className="flex-grow flex-shrink overflow-auto flex flex-col gap-y-8 py-8 text-white w-full h-auto px-[1.25rem] sm:px-[3.5rem] lg:px-[5rem]">
      <p className="font-firaCode mx-auto font-extrabold text-[45px]">
        <span className="text-white mr-4">Our</span>
        <span className="text-[#E4B40D]">Features</span>
      </p>
      <FeatureCells />
    </section>
  );
};

export default Features;
