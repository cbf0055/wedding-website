import React from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import donovan from "../assets/donovan.jpg";
import gavin from "../assets/gavin.jpg";
import joe from "../assets/joe.jpg";
import nick from "../assets/nick.jpg";
import kyle from "../assets/kyle.jpg";

const InfoCard = () => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={donovan}></Image>
        <CardBody>
          <Heading fontSize="2xl">Donovan Blas</Heading>
          <p>Best Man</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={gavin}></Image>
        <CardBody>
          <Heading fontSize="2xl">Gavin Dierkhising</Heading>
          <p>Groomsmen</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={joe}></Image>
        <CardBody>
          <Heading fontSize="2xl">Joe Lee</Heading>
          <p>Groomsmen</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={nick}></Image>
        <CardBody>
          <Heading fontSize="2xl">Nicholas Ayres</Heading>
          <p>Groomsmen</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={kyle}></Image>
        <CardBody>
          <Heading fontSize="2xl">Kyle Hunter</Heading>
          <p>Groomsmen</p>
        </CardBody>
      </Card>
    </>
  );
};

export default InfoCard;
