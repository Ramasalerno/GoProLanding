import React from "react";
import Slider from "react-slick";
import actividades from "@/app/mock.json";

const SliderActividades = () => {

    // Funciones de las flechas de next y prev

  const PrevArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded"
        onClick={onClick}
      >
        &#8592;
      </button>
    );
  };

  const NextArrow = (props: { onClick: any }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center"
        onClick={onClick}
      >
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  // Slider de actividades
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <PrevArrow onClick={undefined} />,
    nextArrow: <NextArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container-slider mt-20 w-3/4 mx-auto">
        <h4 className="compra-carousel-title text-black">
          Comprar por actividad
        </h4>
        <Slider {...settings}>
          {actividades.map((item) => (
            <div key={item.nombre} className="card-contain mx-4">
              <div className="card-actividades relative ml-4">
                <a
                  href="https://tienda.mercadolibre.com.ar/gopro"
                  target="_blank"
                >
                  <img
                    className="img-actividades"
                    width={400}
                    height={400}
                    src={item.url}
                    alt="imagen"
                  />
                </a>
                <p className="absolute bottom-0 left-5 text-white font-bold text-xl px-2 py-1 mb-3">
                  {item.nombre}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderActividades;
