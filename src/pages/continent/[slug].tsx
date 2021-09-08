import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCity } from "../../components/ContinentCity";
import { ContinentContent } from "../../components/ContinentContent";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex w="100%" direction="column">
      <Header />
      <ContinentBanner />
      <ContinentContent />
      <Flex
        align="space-between"
        py="50"
        flexWrap="wrap"
        px={[5, 5, 5, 100, 215]}
        w="100%"
        maxWidth="1440px"
      >
        <ContinentCity
          country="Reino Unido"
          city="Londres"
          flagUrl="/flag_uk.png"
          imageUrl="/london.png"
        />
        <ContinentCity
          country="França"
          city="Paris"
          flagUrl="/flag_france.png"
          imageUrl="/france.jpg"
        />
        <ContinentCity
          country="Itália"
          city="Roma"
          flagUrl="/flag_italy.png"
          imageUrl="/rome.jpg"
        />
        <ContinentCity
          country="Holanda"
          city="Amsterdã"
          flagUrl="/flag_netherland.png"
          imageUrl="/amsterdam.jpg"
        />
        <ContinentCity
          country="República Tcheca"
          city="Praga"
          flagUrl="/flag_czech.png"
          imageUrl="/prague.jpg"
        />
      </Flex>
    </Flex>
  );
}
