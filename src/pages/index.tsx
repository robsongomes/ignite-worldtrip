import { Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

const continents = [
  {
    id: "europe",
    name: "Europa",
    description: "o continente mais antigo",
    imageUrl: "/europe.jpg",
  },
  {
    id: "asia",
    name: "Ásia",
    description: "o mais populoso do mundo",
    imageUrl: "/asia.jpg",
  },
  {
    id: "southamerica",
    name: "América do Sul",
    description: "As belezas da maior floresta do mundo",
    imageUrl: "/south_america.jpg",
  },
  {
    id: "northamerica",
    name: "América do Norte",
    description: "Qualidade de vida e o america life way",
    imageUrl: "/north_america.jpg",
  },
  {
    id: "oceania",
    name: "Oceania",
    description: "Um dos lugares mais selvagens do mundo",
    imageUrl: "/oceania.jpg",
  },
];

const Home: NextPage = () => {
  return (
    <Flex w="100%" mx="auto" direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />
      <Heading align="center" mt={["1rem", "3rem"]} size="lg">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </Flex>
  );
};

export default Home;
