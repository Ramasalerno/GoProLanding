"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Jumbotron = () => {
  const slides = [
    {
      media: "/slider/slide2.jpg",
      type: "image",
      legend: "HERO 12 BLACK",
      title: "LA HERO CON MÁS FUNCIONES HASTA LA FECHA",
      subtitle: "HERO 12 BLACK",
      buttonText: "Comprar ahora",
      buttonLink: "https://tienda.mercadolibre.com.ar/gopro",
    },
    {
      media: "/slider/videohero2.mp4",
      type: "video",
      legend: "CREATOR EDITION",
      title: "EL TOOLKIT CREATIVO DEFINITIVO",
      subtitle: "HERO12 BLACK EDITION PARA CREADORES",
      buttonText: "Comprar ahora",
      buttonLink: "https://tienda.mercadolibre.com.ar/gopro",
    },
    {
      media: "/slider/slide3.mp4",
      type: "video",
      legend: "MAX",
      title: "CAPTURA CONTENIDO 360",
      subtitle: "INCREIBLE CON LA MAX",
      thirdTitle: "Cámara de 360° MAX",
      buttonText: "Comprar ahora",
      buttonLink: "https://tienda.mercadolibre.com.ar/gopro",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat mb-20"
        style={{
          height: "80vh",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "image" && (
              <img
                src={slide.media}
                alt=""
                className="w-full h-full object-cover"
                style={{ maxHeight: "80vh" }}
              />
            )}
            {slide.type === "video" && (
              <video
                src={slide.media}
                autoPlay
                loop
                muted
                className="w-full h-full object-fill"
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 flex justify-start items-center">
          <div className="text-white text-left w-full sm:w-1/3 ml-64 jumbotron-content">
            <p className="text-xl lg:text-xl font-bold sm:text-lg md:text-xl">
              {slides[currentSlide].legend}
            </p>
            <h1 className="text-3xl lg:text-7xl font-bold sm:text-4xl md:text-5xl">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-5xl font-bold mt-2 sm:text-3xl md:text-4xl">
              {slides[currentSlide].subtitle}
            </h2>
            {slides[currentSlide].thirdTitle && (
              <h2 className="text-sm font-bold mt-2 sm:text-xs md:text-sm">
                {slides[currentSlide].thirdTitle}
              </h2>
            )}
            <div className="mt-4 flex justify-start">
              <a
                href={slides[currentSlide].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-gray-900 px-4 py-4 rounded-md">
                  {slides[currentSlide].buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
