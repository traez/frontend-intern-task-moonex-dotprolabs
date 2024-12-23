const HeroRight = () => {
  return (
    <section className="hidden 1xl:block col-start-3 row-start-1">
      <article className="relative flex flex-col w-full h-[600px]">
      <div className="absolute w-[54px] h-[46px] bg-[url('/star-img-2.png')] top-[3rem] left-[7rem]" /> 

        <div className="absolute w-[259px] h-[259px] bg-[url('/sphere.webp')] bg-[contain] top-[9rem] left-4" />

         <div className="absolute w-[61px] h-[60px] bg-[url('/star-img-1.png')] bottom-[2rem] left-[7rem]" /> 
      </article>
    </section>
  );
};

export default HeroRight;
