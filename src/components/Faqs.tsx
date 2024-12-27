import Image from "next/image";

const Faqs = () => {
  const faqData = [
    {
      question: "How do I get a Referral Code?",
      answer:
        "Connect your wallet to the platform your unique referral code will be auto generated!",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "What are the minimum and maximum referral rewards?",
      answer:
        "You will earn 1% of every transaction value, with no maximum limit on rewards!",
    },
  ];

  return (
    <section className="flex-grow flex-shrink overflow-auto mx-auto w-full max-w-[997px] h-auto my-6 pt-6 pb-[4rem] px-[1.25rem] sm:px-[3.5rem] lg:px-[5rem] flex flex-col justify-center items-center bg-[#0a1f2a] rounded-[1rem]">
      <article className="font-firaCode text-[#E4B40D] font-extrabold text-[35px] w-full border-b border-[#7A7A7A]/50 py-4">
        <p className="justify-self-center">FAQs</p>
      </article>
      {faqData.map((faq, index) => (
        <article
          key={index}
          className="font-raleway w-full border-b border-[#7A7A7A]/50 py-4 flex flex-col justify-center items-center group"
        >
          <menu className="mx-auto w-[90%] flex flex-row justify-between items-center">
            <p className="text-white font-medium text-lg">{faq.question}</p>
            <div className="relative w-[45px] h-[45px] cursor-pointer">
              <Image
                src="/icon-plus.png"
                alt="icon-plus"
                fill
                sizes="(min-width: 360px) 100vw"
                className="object-contain group-hover:hidden"
              />
              <Image
                src="/icon-vdown.png"
                alt="icon-down"
                fill
                sizes="(min-width: 360px) 100vw"
                className="object-contain hidden group-hover:block"
              />
            </div>
          </menu>
          <b className="mx-auto w-[90%] text-[#BAB8B8] text-[15px] font-normal hidden group-hover:block">
            {faq.answer}
          </b>
        </article>
      ))}
    </section>
  );
};

export default Faqs;
