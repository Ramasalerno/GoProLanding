import { Grid } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const HeroAccesorios = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto accesorios-container">
        <Grid.Container
          gap={2}
          style={{
            marginBottom: "22px",
          }}
        >
          <Grid xs={12} sm={6}>
            <a
              href="https://tienda.mercadolibre.com.ar/gopro"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex flex-col h-full">
                <div className="h-1/2 relative">
                  <img
                    className="w-full h-auto"
                    src="/accesoriosgopro.webp"
                    alt="Placeholder para imagen superior derecha"
                  />
                  <p className="absolute top-0 left-0 text-white font-bold px-2 py-1 mt-2 ml-6 text-6xl">
                    Accesorios para tu
                    <br />
                    GoPro
                  </p>
                </div>
              </div>
            </a>
          </Grid>

          <Grid xs={12} sm={6}>
            <div className="flex flex-col h-full">
              <div className="h-1/2 relative">
                <a
                  href="https://tienda.mercadolibre.com.ar/gopro"
                  target="blank"
                >
                  <img
                    className="w-full h-full"
                    src="/modulos.webp"
                    alt="Placeholder para imagen superior derecha"
                  />
                </a>
                <p className="absolute top-0 left-0 text-black font-bold text-5xl px-2 py-1 mt-2 ml-5">
                  Módulos
                </p>
              </div>

              <div className="flex h-1/2">
                <div className="w-1/2 mr-2 relative mt-2">
                  <a
                    href="https://tienda.mercadolibre.com.ar/gopro"
                    target="blank"
                  >
                    <img
                      className="w-full h-full"
                      src="/soportesgopro.webp"
                      alt="Placeholder para primera imagen inferior derecha"
                    />
                  </a>
                  <p className="absolute bottom-0 left-0 text-black font-bold text-4xl px-2 py-1 mb-5 ml-5">
                    Soportes
                  </p>
                </div>
                <div className="w-1/2 relative mt-2">
                  <a
                    href="https://tienda.mercadolibre.com.ar/gopro"
                    target="blank"
                  >
                    <img
                      className="w-full h-full"
                      src="/protecciongopro.webp"
                      alt="Placeholder para segunda imagen inferior derecha"
                    />
                  </a>
                  <p className="absolute bottom-0 left-0 text-black font-bold text-4xl px-2 py-1 mb-5 ml-5">
                    Protección
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default HeroAccesorios;
