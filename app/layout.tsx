import "./globals.css";
import Favicon from "/public/metadata/favicon.ico";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { createTheme } from "@nextui-org/react";
import Head from "next/head";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "GoPro | Las camaras mas versatiles del mundo",
  description: "Vivi la experiencia GoPro",
  icons: [{ rel: "icon", url: Favicon.src, sizes: "64x64" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <a
          href="https://api.whatsapp.com/send?phone=5491169631402"
          className="btn-wsp"
          target="_blank"
        >
          <img src="/whatsapp.png" alt="logowhatsapp" />
        </a>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
