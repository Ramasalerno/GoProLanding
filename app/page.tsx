"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextUIProvider } from "@nextui-org/react";
import Jumbotron from "@/components/Jumbotron";
import Quik from "@/components/Quik";
import SliderActividades from "@/components/SliderActividades";
import HeroBlackEdition from "@/components/HeroBlackEdition";
import HeroAccesorios from "@/components/HeroAccesorios";
import HeroSubscribe from "@/components/HeroSubscribe";
import HeroComplementos from "@/components/HeroComplementos";
import ContactForm from "@/components/ContactForm";
import HeroInicio from "@/components/HeroInicio";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="bg-white">
        <Jumbotron />
        <HeroInicio/>
        <Quik />
        <SliderActividades />
        <HeroBlackEdition />
        <HeroAccesorios />
        <HeroSubscribe />
        <HeroComplementos />
        <ContactForm/>
      </div>
    </NextUIProvider>
  );
}
