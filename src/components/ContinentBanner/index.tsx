import { Flex, VStack, Heading, Image } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["200px", "300px", "400px"]}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)) , url('/europe.jpg')`}
      bgSize="cover"
      bgPosition="center"
      direction="column"
      align="flex-start"
      justify="flex-end"
      fontWeight="500"
      px={[5, 5, 5, 100, 250]}
      pb={[20]}
    >
      <Heading fontSize={["xl", "2xl", "2xl", "3xl", "4xl"]} color="gray.100">
        Europa
      </Heading>
    </Flex>
  );
}
