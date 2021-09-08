import { Flex, Text, Image } from "@chakra-ui/react";

interface ContinentCityProps {
  country: string;
  city: string;
  flagUrl: string;
  imageUrl: string;
}

export function ContinentCity({
  country,
  city,
  flagUrl,
  imageUrl,
}: ContinentCityProps) {
  return (
    <Flex m="5" borderRadius="4px" w="256px" flexDirection="column">
      <Flex
        overflow="hidden"
        w="100%"
        h="173px"
        bgImage={imageUrl}
        bgRepeat="no-repeat"
        bgSize="cover"
      />
      <Flex
        justify="space-between"
        p="5"
        align="center"
        border="1px"
        borderTop="0"
        borderColor="yellow.300"
        borderRadius="4px"
      >
        <Flex direction="column">
          <Text fontSize="lg" color="gray.800">
            {city}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {country}
          </Text>
        </Flex>
        <Image src={flagUrl} w="30px" h="30px" />
      </Flex>
    </Flex>
  );
}
