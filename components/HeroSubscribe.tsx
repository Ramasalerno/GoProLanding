import { Grid } from "@nextui-org/react";
import React from "react";
import { MdCameraswitch } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCloudUpload } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";
import { FaTag } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

const HeroSubscribe = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <Grid.Container
          gap={2}
          style={{
            marginBottom: "22px",
          }}
        >
          <Grid xs={12} sm={6}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold text-black">
                Suscribite y sacá el máximo partido a tu GoPro
              </h1>
              <div className="mt-4 flex justify-start">
                <div>
                  <div className="flex items-center mb-4">
                    <MdCameraswitch size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      Sustitución de cámara dañada¹
                    </h6>
                  </div>
                  <div className="flex items-center mb-4">
                    <FaCloudDownloadAlt size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      Copia de seguridad ilimitada en la nube del contenido de
                      tu GoPro con la calidad original²
                    </h6>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoIosCloudUpload size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      Subida automática a la nube de tu contenido mientras la
                      cámara se carga³
                    </h6>
                  </div>
                  <div className="flex items-center mb-4">
                    <IoMdSpeedometer size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      Vídeos automáticos de momentos destacados
                    </h6>
                  </div>
                  {/* <div className="flex items-center mb-4">
                    <FaTag size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      ​$100 de descuento en tu próxima GoPro⁴ y hasta un 50 % de
                      descuento en GoPro.com⁵
                    </h6>
                  </div> */}
                  <div className="flex items-center">
                    <FaLaptop size={"2em"} color="gray" />
                    <h6 className="text-lg text-black ml-3">
                      ¡Novedad! Quik para Mac ya disponible para su descarga.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid xs={12} sm={6}>
            <div className="flex flex-col h-full">
              <div className="h-1/2 relative">
                <img
                  className="w-full h-auto"
                  src="/herohomedown.webp"
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

export default HeroSubscribe;
