"use client";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    "Home",
    "About Us",
    "Roadmap",
    "FAQs",
    "Contact Us",
    "Connect Wallet",
  ];

  return (
    <nav className="h-[75px] shadow-sm flex items-center justify-between relative font-raleway">
      {/* Brand Logo*/}
      <div className="relative w-[97px] sm:w-[145.5px] lg:w-[194px] h-[36.5px] sm:h-[54.75px] lg:h-[73px]">
        <Image
          src="/logo.png"
          alt="logo"
          fill
          sizes="(min-width: 400px) 100vw"
          className="object-cover"
        />
      </div>

      {/* Middle section - Desktop menu items */}
      <div className="hidden lg:flex items-center space-x-8">
        {menuItems.slice(0, -1).map((item) => (
          <a
            key={item}
            href="#"
            className="text-white text-[18px] font-extrabold hover:text-[#EDD955] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right side - Menu button (mobile) and Connect Wallet (desktop) */}
      <aside className="flex items-center">
        <menu className="lg:hidden group relative">
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>

          {/* Mobile menu dropdown */}
          <div
            className="absolute top-[50px] right-0 w-48 bg-[#051422]/80
 backdrop-blur-sm shadow-md z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`block px-4 py-3 text-white hover:bg-white/10 transition-colors ${
                  item === "Connect Wallet"
                    ? "bg-[#D19B0C] hover:bg-[#E4B40D]"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </menu>

        {/* Right side - Connect Wallet (desktop) */}
        <div className="hidden lg:flex items-center">
          <button className="w-[159px] h-[47px] rounded-[100px] text-black text-[14px] font-extrabold bg-gradient-to-b from-[#E4B40D] to-[#FFE68F] hover:bg-gradient-to-b hover:from-[#FFE68F] hover:to-[#E4B40D]">
            {menuItems[menuItems.length - 1]}
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
