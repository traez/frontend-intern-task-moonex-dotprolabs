import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Fira_Code } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naija Japa Postgresql App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${firaCode.variable}`}>
      <body className="antialiased flex flex-col justify-center items-center h-screen w-full bg-[#196e61]">
        <main className="flex-grow h-full w-full max-w-[1280px]">
          {children}
        </main>
      </body>
    </html>
  );
}
