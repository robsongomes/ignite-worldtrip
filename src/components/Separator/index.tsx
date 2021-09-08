import { Box } from "@chakra-ui/react";

export function Separator() {
  return (
    <Box
      mx="auto"
      w={["60px", "90px"]}
      bg="gray.700"
      h="2px"
      mt={["1rem", "3rem"]}
    />
  );
}
