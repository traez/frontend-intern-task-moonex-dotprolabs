import Image from "next/image";

const FeatureCells = () => {
  const features = [
    {
      image: "/features-cheapest.svg",
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      image: "/features-certik.svg",
      title: "CerTIK",
      description:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
    },
    {
      image: "/features-nocontract.svg",
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets because APC sucks",
    },
    {
      image: "/features-crossdex.svg",
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <article className="font-raleway grid grid-cols-[repeat(auto-fit,_minmax(296px,_1fr))] gap-8 w-full">
      {features.map((feature, index) => (
        <aside
          key={index}
          className="w-[296px] h-[281px] bg-[#0a1f2a] rounded-[1rem] justify-self-center border border-[#7A7A7A]/50 p-4 flex flex-col justify-center items-start gap-8"
        >
          <div className="relative w-[68px] h-[68px]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </div>
          <b
            className="font-semibold text-[20px] leading-[30px]
 text-[#ECF1F0]"
          >
            {feature.title}
          </b>
          <p
            className="font-normal text-[16px] leading-[24px]
 text-[#B6B6B6] text-left"
          >
            {feature.description}
          </p>
        </aside>
      ))}
    </article>
  );
};

export default FeatureCells;
