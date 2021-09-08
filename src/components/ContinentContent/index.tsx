import { Grid, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function ContinentContent() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
  });
  return (
    <Grid
      maxWidth="1440px"
      mt={isMobile ? "1rem" : "3rem"}
      px={[5, 5, 5, 100, 215]}
      templateColumns={isMobile ? "1fr" : "1fr 1fr"}
    >
      <Text
        px="2rem"
        textAlign="justify"
        fontSize={["xs", "sm", "md", "lg", "xl"]}
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Grid mt={isMobile ? "5" : "0"} templateColumns="repeat(3, 1fr)" gap="4">
        <Flex flexDirection="column" justify="center" align="center">
          <Text
            fontSize={["1xl", "2xl", "4xl"]}
            fontWeight="bold"
            color="yellow.400"
          >
            50
          </Text>
          <Text
            fontSize={["sm", "md", "xl"]}
            fontWeight="bold"
            color="gray.700"
          >
            países
          </Text>
        </Flex>
        <Flex flexDirection="column" justify="center" align="center">
          <Text
            fontSize={["1xl", "2xl", "4xl"]}
            fontWeight="bold"
            color="yellow.400"
          >
            60
          </Text>
          <Text
            fontSize={["sm", "md", "xl"]}
            fontWeight="bold"
            color="gray.700"
          >
            línguas
          </Text>
        </Flex>
        <Flex flexDirection="column" justify="center" align="center">
          <Text
            fontSize={["1xl", "2xl", "4xl"]}
            fontWeight="bold"
            color="yellow.400"
          >
            27
          </Text>
          <Text
            fontSize={["sm", "md", "xl"]}
            fontWeight="bold"
            color="gray.700"
          >
            cidades +100
          </Text>
        </Flex>
      </Grid>
    </Grid>
  );
}
