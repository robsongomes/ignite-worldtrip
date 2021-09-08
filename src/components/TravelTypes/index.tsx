import {
  Flex,
  VStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TravelTypeProps {
  imageUrl: string;
  description: string;
  displayImage: boolean;
}

const TravelType = ({
  description,
  imageUrl,
  displayImage,
}: TravelTypeProps) => {
  return (
    <Flex
      direction={["row", "column"]}
      justify="center"
      align="center"
      spacing="1rem"
    >
      {displayImage ? (
        <Image src={imageUrl} boxSize={["1rem", "3rem", "5rem"]} />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="1">
          •
        </Text>
      )}
      <Text>{description}</Text>
    </Flex>
  );
};

export function TravelTypes() {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex
      w="100vw"
      mt={["2rem", "5rem"]}
      mx="auto"
      px={["1rem", "100"]}
      h="145"
      flexWrap="wrap"
      justify={["space-around", "space-between"]}
    >
      <TravelType
        description="vida noturna"
        imageUrl="/cocktail.svg"
        displayImage={!!isMobile}
      />
      <TravelType
        description="praia"
        imageUrl="/praia.svg"
        displayImage={!!isMobile}
      />
      <TravelType
        description="moderno"
        imageUrl="/moderno.svg"
        displayImage={!!isMobile}
      />
      <TravelType
        description="clássico"
        imageUrl="/classico.svg"
        displayImage={!!isMobile}
      />
      <TravelType
        description="e mais..."
        imageUrl="/terra.svg"
        displayImage={!!isMobile}
      />
    </Flex>
  );
}
