import React from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import donovan from "../assets/Donovan.jpeg";
const InfoCard = () => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={donovan}></Image>
        <CardBody>
          <Heading fontSize="2xl">Donovan Blas</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default InfoCard;
