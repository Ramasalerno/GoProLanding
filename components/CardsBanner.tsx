import { Button, Card, Col, Row, Text } from "@nextui-org/react";

import Link from "next/link";
import type { NextPage } from "next";

interface Props {
  title: string;
  label: string;
  imageURL: string;
}

const CardsBanner: NextPage<Props> = (props) => {
  const { title, label, imageURL } = props;

  return (
    <Card style={{ backgroundColor: "white" }}>
      <Card.Header css={{ position: "absolute", top: 5 }}>
        <Col></Col>
      </Card.Header>
      <Card.Image src={imageURL} />
      <Col css={{ width: "full", md: { marginLeft: "33px" } }}>
        <Text
          weight={"bold"}
          size={30}
          css={{ textAlign: "center", color: "black" }}
        >
          {label}
        </Text>

        <Col
          css={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "22px",
            marginTop: "22px",
          }}
        >
          <a href="https://tienda.mercadolibre.com.ar/gopro" target="_blank">
            <Button
              style={{
                background: "black",
              }}
              size="md"
              css={{ width: "25%", marginTop: "10px" }}
            >
              Comprar ahora
            </Button>
          </a>
        </Col>
      </Col>
    </Card>
  );
};

export default CardsBanner;
