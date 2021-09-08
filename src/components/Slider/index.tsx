import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Flex, Heading, Text } from "@chakra-ui/react";

import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface Continent {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface SliderProps {
  continents: Continent[];
}

export function Slider({ continents }: SliderProps) {
  return (
    <Flex w="100%" mx="auto" my={["1rem", "3rem"]} maxWidth="1240">
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        style={{ width: "100%", flex: 1 }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Flex
              w="100%"
              h={["250px", "300px", "450px"]}
              bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('${continent.imageUrl}')`}
              bgSize="cover"
              bgPosition="center"
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              fontWeight="500"
            >
              <Link href={`/continent/${continent.id}`}>
                <a>
                  <Heading
                    fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
                    color="gray.100"
                  >
                    {continent.name}
                  </Heading>
                </a>
              </Link>
              <Text color="gray.300" mt="1rem">
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
