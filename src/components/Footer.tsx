import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex-grow flex-shrink overflow-auto py-8 w-full h-[320px] lg:h-[160px] px-[1.25rem] sm:px-[3.5rem] lg:px-[5rem] font-raleway flex flex-col lg:flex-row items-center justify-between">
      <div className="relative w-[97px] xs:w-[145.5px] lg:w-[194px] h-[36.5px] xs:h-[54.75px] lg:h-[73px]">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          sizes="(min-width: 400px) 100vw"
          className="object-cover"
        />
      </div>
      <aside className="grid grid-cols-[repeat(auto-fit,_minmax(96px,_1fr))] gap-2 w-[60%] text-white font-extrabold text-[18px]">
        <b className="justify-self-center whitespace-nowrap">About Us</b>
        <b className="justify-self-center">Roadmap</b>
        <b className="justify-self-center">FAQs</b>
        <b className="justify-self-center whitespace-nowrap">Contact Us</b>
      </aside>
      <aside className="flex flex-col gap-4">
        <span className="justify-self-center font-extrabold text-[30px] leading-[20px] mx-auto">
          <b className="mr-2 text-white">Contact</b>
          <b className="text-[#E4B40D]">Us</b>
        </span>
        <menu className="justify-self-center text-white flex flex-row mx-auto gap-x-14">
          <div className="relative w-[31px] h-[31px]">
            <Image
              src="/social-telegram.svg"
              alt="social-telegram"
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
          <div className="relative w-[31px] h-[31px]">
            <Image
              src="/social-reddit.svg"
              alt="social-reddit"
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
          <div className="relative w-[31px] h-[31px]">
            <Image
              src="/social-twitter.svg"
              alt="social-twitter"
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
        </menu>
      </aside>
    </section>
  );
};

export default Footer;
