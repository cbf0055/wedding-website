import React from "react";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import donovan from "../assets/donovan.jpg";
import gavin from "../assets/gavin.jpg";
import joe from "../assets/joe.jpg";
import nick from "../assets/nick.jpg";
import kyle from "../assets/kyle.jpg";
import jeremy from "../assets/jeremy.jpg";
import crimson from "../assets/crimson.jpg";
import emily from "../assets/emily.jpg";
import isabel from "../assets/isabel.jpg";
import liv from "../assets/liv.jpg";
import alyson from "../assets/alyson.jpg";
import megan from "../assets/megan.jpg";

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

      <Card borderRadius={10} overflow="hidden">
        <Image src={jeremy}></Image>
        <CardBody>
          <Heading fontSize="2xl">Jeremy Kracy</Heading>
          <p>Groomsmen</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={crimson}></Image>
        <CardBody>
          <Heading fontSize="2xl">Crimson Scott</Heading>
          <p>Maid of Honor</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={isabel}></Image>
        <CardBody>
          <Heading fontSize="2xl">Isabel Vargas</Heading>
          <p>Bridesmaid</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={emily}></Image>
        <CardBody>
          <Heading fontSize="2xl">Emily Mask</Heading>
          <p>Bridesmaid</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={liv}></Image>
        <CardBody>
          <Heading fontSize="2xl">Olivia Garcia</Heading>
          <p>Bridesmaid</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={alyson}></Image>
        <CardBody>
          <Heading fontSize="2xl">Alyson Franklin</Heading>
          <p>Bridesmaid</p>
        </CardBody>
      </Card>

      <Card borderRadius={10} overflow="hidden">
        <Image src={megan}></Image>
        <CardBody>
          <Heading fontSize="2xl">Meagan McKee</Heading>
          <p>Bridesmaid</p>
        </CardBody>
      </Card>
    </>
  );
};

export default InfoCard;
