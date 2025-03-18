"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStoreAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-gray-200 h-8 flex items-center justify-end">
        <a href="#" className="text-gray-600 mx-4">
          Noticias
        </a>
        <a href="#" className="text-gray-600 mx-4">
          Premios
        </a>
        <a href="#" className="text-gray-600 mx-4">
          Soporte
        </a>
        <a href="#" className="text-gray-600 mx-4">
          <TbWorld size={"1em"} />
        </a>
      </div>

      <nav className="bg-white p-4 flex items-center justify-between h-16">
        <div className="flex mx-8">
          <Image
            src="/goprologo.png"
            width={300}
            height={100}
            alt="Logo"
            className="w-auto h-16 mr-4"
          />
        </div>

        {/* Icono hamburguesa */}
        <div className="md:hidden flex justify-end w-full">
          <button onClick={toggleMenu} className="text-gray-900">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navbar en desktop */}
        <div className="hidden md:flex flex-grow justify-between items-center mx-8 ml-auto lg:ml-48">
          <div className="flex-grow flex space-x-8">
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Camaras
            </a>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Aplicaciones
            </a>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Accesorios
            </a>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Complementos de ocio
            </a>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Suscripcion a GoPro
            </a>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              className="text-gray-900 relative navbar-enlaces"
            >
              Compras por actividad
            </a>
          </div>
        </div>

        <div className="flex-grow"></div>

        <div className="hidden md:block">
          <a href="https://tienda.mercadolibre.com.ar/gopro" target="blank">
            <FaStoreAlt className="text-gray-900 mr-2" size={"1.5em"} />
          </a>
        </div>

        {/*Navbar en mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute mt-5 top-16 left-0 w-full bg-white border border-gray-300 z-50">
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Camaras
            </a>
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Aplicaciones
            </a>
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Accesorios
            </a>
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Complementos de ocio
            </a>
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Suscripcion a GoPro
            </a>
            <a
              target="blank"
              href="https://tienda.mercadolibre.com.ar/gopro"
              className="block py-2 px-4 text-gray-900"
            >
              Compras por actividad
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
