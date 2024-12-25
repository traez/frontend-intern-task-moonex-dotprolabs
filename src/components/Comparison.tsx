"use client";
import Image from "next/image";

type DataRowType = {
  column1: string;
};

type HeaderType = {
  content: string | { src: string; alt: string };
};

const Comparison: React.FC = () => {
  const headers: HeaderType[] = [
    { content: "Comparison" },
    { content: { src: "/logo.png", alt: "Header 2 Logo" } },
    { content: { src: "/uniswap-logo.svg", alt: "Header 3 Logo" } },
  ];

  const sampleData: DataRowType[] = [
    { column1: "1. Point number one" },
    { column1: "2. Point number two" },
    { column1: "3. Point number three" },
    { column1: "4. Point number four" },
    { column1: "5. Point number five" },
  ];

  return (
    <div className="w-full h-auto aspect-[2.26] max-w-[1319px] max-h-[584px] overflow-hidden shadow bg-[url('/bg-gradient-img.png')] bg-no-repeat bg-cover bg-center mx-auto bg-[#0a1f2a] rounded-lg sm:rounded-xl lg:rounded-2xl p-0.5 xs:p-2 sm:p-4 lg:p-8">
      <div className="overflow-auto h-full min-w-[330px]">
        <table className="w-full h-full border-collapse border border-[#7A7A7A]">
          <thead>
            <tr>
              <th className="w-[35%] px-0.5 xs:px-1 sm:px-2 lg:px-4 py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm font-semibold text-white border border-[#7A7A7A] text-center">
                {typeof headers[0].content === "string" ? (
                  <b
                    className="text-[#E4B40D] text-[0.8rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-semibold">
                    {headers[0].content}
                  </b>
                ) : null}
              </th>
              {headers.slice(1).map((header, index) => (
                <th
                  key={index}
                  className="w-[32.5%] px-0.5 xs:px-1 sm:px-2 lg:px-4 py-1 xs:py-2 sm:py-3 text-center text-[10px] xs:text-xs sm:text-sm font-semibold text-white border border-[#7A7A7A]"
                >
                  {typeof header.content === "string" ? (
                    header.content
                  ) : (
                    <div className="relative w-full h-[18px] xs:h-[30px] sm:h-[45px] lg:h-[73px]">
                      <Image
                        src={header.content.src}
                        alt={header.content.alt}
                        fill
                        sizes="(min-width: 360px) 100vw"
                        className="object-contain"
                      />
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleData.map((row, rowIndex) => (
              <tr key={rowIndex}>
              <td className="w-[35%] pl-2 xs:pl-4 sm:pl-6 lg:pl-20 py-1 xs:py-3 sm:py-5 text-[10px] xs:text-sm sm:text-base text-white border border-[#7A7A7A] whitespace-normal">
                  {row.column1}
                </td>
                <td className="w-[32.5%] px-0.5 xs:px-1 sm:px-2 lg:px-4 py-0.5 xs:py-2 sm:py-4 text-center border border-[#7A7A7A]">
                  <div className="relative w-[8px] h-[6.46px] xs:w-[20px] xs:h-[16px] sm:w-[26px] sm:h-[21px] mx-auto">
                    <Image
                      src="/check_bold.png"
                      alt="Check"
                      fill
                      sizes="(min-width: 360px) 100vw"
                      className="object-contain"
                    />
                  </div>
                </td>
                <td className="w-[32.5%] px-0.5 xs:px-1 sm:px-2 lg:px-4 py-0.5 xs:py-2 sm:py-4 text-center border border-[#7A7A7A]">
                <div className="relative w-[16px] h-[13px] xs:w-[40px] xs:h-[31px] sm:w-[50px] sm:h-[41px] mx-auto">
                    <Image
                      src="/close_small.png"
                      alt="Close"
                      fill
                      sizes="(min-width: 360px) 100vw"
                      className="object-contain"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
