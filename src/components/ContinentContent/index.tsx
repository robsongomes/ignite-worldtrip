import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Grid,
  Icon,
  Flex,
  Text,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";

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
      <Grid
        mt={isMobile ? "5" : "0"}
        templateColumns="repeat(3, 1fr)"
        gap={isMobile ? "0" : "5"}
      >
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
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={InfoOutlineIcon}
                    ml="1"
                    color="gray.400"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent w="100px" bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  <Text align="center">27</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Grid>
    </Grid>
  );
}
