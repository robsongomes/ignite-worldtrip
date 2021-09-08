import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100vw"
      mx="auto"
      h={["200", "335"]}
      px={["30", "100"]}
      justifyContent="space-between"
      align="center"
      backgroundImage="/banner.jpg"
      bgPosition={["100% 20%"]}
    >
      <VStack align="flex-start">
        <Heading color="gray.100" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
          5 continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.100">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>
      <VStack>
        <Image
          d={["none", "none", "block"]}
          pt={["5rem", "3rem"]}
          boxSize={["xl", "lg"]}
          src="/airplane.svg"
          alt="airplane"
        />
      </VStack>
    </Flex>
  );
}
