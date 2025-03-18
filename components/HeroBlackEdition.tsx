import { Grid } from "@nextui-org/react";
import React from "react";
import CardsBanner from "./CardsBanner";

const HeroBlackEdition = () => {
  return (
    <div>
      <div className="md:w-3/4 mx-auto w-full">
        <Grid.Container
          gap={2}
          style={{
            marginBottom: "22px",
          }}
        >
          <Grid xs={12} sm={6}>
            <CardsBanner
              label="HERO12 Black Edición para creadores"
              title=""
              imageURL="/hero12black.webp"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <CardsBanner
              label="Kit de módulo de lente MAX 2.0"
              title=""
              imageURL="/kitlente.webp"
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default HeroBlackEdition;
