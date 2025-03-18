"use client";

import { NextUIProvider, createTheme } from "@nextui-org/react";

import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";

const darkTheme = createTheme({ type: "dark" });

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollUp = () => {
    var currentScroll = document.documentElement.scrollTop;
    console.log(currentScroll);
  };

  return (
    <>
      <NextUIProvider theme={darkTheme}>
        <footer
          id="footer"
          className="bg-dark-100 text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left"
        >
          <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div className="mr-12 hidden lg:block"></div>

            <div className="flex justify-center">
              <a
                href="https://tienda.mercadolibre.com.ar/gopro"
                target="blank"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/shopnow_arg/"
                target="blank"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/ShopnowArg/?locale=es_LA"
                target="blank"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1-1H7a1 1 0 00-1 1v18a1 1 0 001 1h5.72v-7.51h-2.05V11.8h2.05v-1.39c0-2.02 1.24-3.12 3.04-3.12.86 0 1.6.06 1.82.09v2.12h-1.25c-1-1.09-1.3-.76-1.3.68v1.25h2.63l-.34 2.69h-2.29V22H17a1 1 0 001-1V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              <div className="">
                <h1 className="text-3xl">Acerca de </h1>

                <br />
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Nuestra historia
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Empleo
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  CSR
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Diversidad e inclusion
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Distribuidores
                </h4>
              </div>

              <div className="">
                <h1 className="text-3xl">Tienda </h1>

                <br />
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Camaras
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Aplicaciones
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Accesorios
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Complementos de ocio
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Suscripcion a GoPro
                </h4>
              </div>

              <div className="">
                <h1 className="text-3xl">Noticias </h1>

                <br />
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Noticias
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  GoPro Tips
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  El mundo de GoPro
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Heroes
                </h4>
              </div>

              <div className="">
                <h1 className="text-3xl">Programas </h1>

                <br />
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  GoPro Awards
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  GoPro for a cause
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  GoPro Labs
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  VIP
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Descuentos para estudiantes
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Programa de afiliados
                </h4>
              </div>

              <div className="">
                <h1 className="text-3xl">Soporte </h1>

                <br />
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Servicio de atencion al cliente de GoPro
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Estado del pedido
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Contacta con nosotros
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Politica de garantia y devoluciones
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Solicitud de devoluciones
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Politica de envio
                </h4>
                <h4 className="mb-4 text-xs flex items-center justify-center font-semibold uppercase md:justify-start hover:underline cursor-pointer ">
                  Actualizaciones de software del producto
                </h4>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto border-t-2 border-white my-8"></div>

          {/* Párrafo */}
          <p className="text-white text-center text-xs mb-4">
            @ 2024 GoPro Inc. Todos los derechos reservados.
          </p>
          <p className="text-white text-center text-xs mb-4">
            GoPro, HERO y sus respectivos logotipos son marcas comerciales o
            marcas comerciales registradas de GoPro, Inc. en los Estados Unidos
            y otros países. Todas las demás marcas comerciales son propiedad de
            sus respectivos propietarios.
          </p>
        </footer>
      </NextUIProvider>
    </>
  );
};

export default Footer;
