const HeroLeft = () => {
  return (
    <section className="col-start-1 row-start-1 w-full h-[500px] 1xl:h-[600px] pt-[5rem] 1xl:pt-0 grid grid-cols-1 grid-rows-1 1xl:grid-rows-[4fr_6fr] font-firaCode">
      <article className="col-start-1 row-start-1 hidden 1xl:block relative">
        <div className="absolute w-[61px] h-[60px] bg-[url('/star-img.png')] top-[4rem] left-[7rem]" />
      </article>
      <article className="col-start-1 row-start-1 1xl:row-start-2">
        <p className="text-white text-[40px] 1xl:text-[60px] leading-tight">
          Trusted Multi-Chain
        </p>
        <p className="leading-tight">
          <span className="text-[#F9D423] text-[40px] 1xl:text-[60px] mr-6">DEX</span>
          <span className="text-white text-[40px] 1xl:text-[60px]">Platform</span>
        </p>
        <p className="text-[#9E9E9E] text-[18px] leading-[34px] tracking-[0] mb-4">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
        <p className="flex">
          <span className="bg-[#F9D423] text-black font-extrabold text-[14px] rounded-[100px] w-[159px] h-[47px] flex justify-center items-center mr-6">Connect Wallet</span>
          <span className="text-[#F9D423] font-extrabold text-[14px] rounded-[100px] w-[159px] h-[47px] flex justify-center items-center border-2 border-[#F9D423]">Trade Crypto</span>
        </p>
      </article>
    </section>
  );
};

export default HeroLeft;
