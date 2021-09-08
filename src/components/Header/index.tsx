import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      bg="white"
      as="header"
      h={["70", "100"]}
      w="100vw"
      px="1rem"
      align="center"
      justify="center"
      mx="auto"
    >
      <Grid
        w="100%"
        mx="auto"
        maxWidth="1160px"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={ChevronLeftIcon}
                gridColumn="1"
                justifySelf="start"
                fontSize={[20, 40]}
              />
            </a>
          </Link>
        )}
        <Image gridColumn="2" src="/logo.svg" alt="logo" />
      </Grid>
    </Flex>
  );
}
