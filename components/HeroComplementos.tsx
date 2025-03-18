import { Grid } from "@nextui-org/react";
import React from "react";

const HeroComplementos = () => {
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
            <div className="flex flex-col h-full">
              <div className="h-1/2 relative">
                <a
                  href="https://tienda.mercadolibre.com.ar/gopro"
                  target="blank"
                >
                  <img
                    className="w-full h-full "
                    src="/mochilas.webp"
                    alt="Placeholder para imagen superior derecha"
                  />
                </a>
                <p className="absolute top-0 left-0 text-black font-bold text-4xl px-2 py-1 mt-2 ml-5">
                  Mochilas <br />y bolsas
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
                      src="/ropa.webp"
                      alt="Placeholder para primera imagen inferior derecha"
                    />
                  </a>
                  <p className="absolute bottom-0 left-0 text-white font-bold text-4xl px-2 py-1 mb-5 ml-5">
                    Ropa
                  </p>
                </div>
                <div className="w-1/2 relative mt-2">
                  <a
                    href="https://tienda.mercadolibre.com.ar/gopro"
                    target="blank"
                  >
                    <img
                      className="w-full h-full"
                      src="/complementos.webp"
                      alt="Placeholder para segunda imagen inferior derecha"
                    />
                  </a>
                  <p className="text-white lg:text-black absolute bottom-0 left-0 font-bold text-sm sm:text-xl lg:text-xl px-2 py-1 mb-1 ml-5">
                    Complementos de ocio
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid xs={12} sm={6}>
            <div className="flex flex-col h-full">
              <div className="h-1/2 relative">
                <a
                  href="https://tienda.mercadolibre.com.ar/gopro"
                  target="blank"
                >
                  <img
                    className="w-full h-auto"
                    src="/accesoriosgopro.webp"
                    alt="Placeholder para imagen superior derecha"
                  />
                </a>
                <p className="absolute top-0 left-0 text-white font-bold px-2 py-1 mt-2 ml-6 text-6xl">
                  Accesorios para tu
                  <br />
                  GoPro
                </p>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default HeroComplementos;
