import { Grid } from "@nextui-org/react";
import React from "react";
import { FaCheck } from "react-icons/fa";

const HeroInicio = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-black text-center mb-4">
          DISTRIBUIDOR OFICIAL
        </h1>

        {/* Subtítulo */}
        <h2 className="text-3xl font-semibold text-black text-left mb-4 mt-8">
          ¡Únete a la aventura con GoPro!
        </h2>

        {/* Texto descriptivo */}
        <p className="text-lg text-gray-600 text-left mb-8">
          Bienvenido a la familia GoPro. Como distribuidor oficial podrás ofrecer a tus clientes la mejor tecnología en cámaras de acción para capturar sus aventuras y momentos épicos.
        </p>

        {/* Subtítulo de beneficios */}
        <h3 className="text-3xl font-bold text-black text-left mb-1">
          Beneficios de ser distribuidor oficial
        </h3>

        <Grid.Container
          gap={2}
          style={{
            marginBottom: "22px",
          }}
        >
          <Grid xs={12} sm={6}>
            <div className="flex flex-col items-start justify-center">
              {/* Lista de beneficios con checks */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCheck size={"1.8em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Acceso a las mejores cámaras de acción con un diseño práctico, duradero y sumergible.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"2.3em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Estabilización avanzada y un ecosistema GoPro para capturar, descargar y editar contenido de manera épica.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"1.5em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Amplia gama de accesorios para adaptarse a cualquier actividad.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"1.5em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Exhibidor de cámaras y accesorios para tu tienda.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"1.5em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Capacitación de marca y productos.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"1.5em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    Respaldo de la mejor marca en cámaras de acción.
                  </h6>
                </div>
                <div className="flex items-center">
                  <FaCheck size={"1.5em"} color="gray" />
                  <h6 className="text-lg text-black ml-3 font-normal">
                    ¡Y mucho más!
                  </h6>
                </div>
              </div>
            </div>
          </Grid>

          <Grid xs={12} sm={6}>
            <div className="flex flex-col h-full">
              <div className="h-1/2 relative">
                <img
                  className="w-full h-auto"
                  src="/gopro.png"
                  alt="Placeholder para imagen superior derecha"
                />
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default HeroInicio;