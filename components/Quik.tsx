import React from "react";

const Quik = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-10 quik-banner">
        <div className="relative">
          <img
            src="/quik.png"
            alt="Banner"
            className="w-full h-auto rounded-lg mb-4"
          />

          <h2 className="text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold py-2 px-4 rounded">
            APLICACIÓN QUIK PARA MAC
          </h2>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                console.log("Button clicked!");
              }}
              className="absolute bottom-8 mx-auto bg-white hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <a
                href="https://gopro.com/es/ar/shop/quik-app-video-photo-editor"
                target="blank"
                className="text-gray-900"
              >
                Mas información
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quik;
