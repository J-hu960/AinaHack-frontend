import { Box, Text, HStack, Image } from "@chakra-ui/react";

function Carousel({ title }:{title:string}) {
  return (
    <Box >
      <Text fontSize="2xl" fontWeight="bold" mb={4} px={4}>
        {title}
      </Text>
      <HStack
        overflowX="auto"
        spaceX={4}
        pb={4}
        px={4} // Padding horizontal para el espacio al inicio y final del carrusel
        css={{
          "&::-webkit-scrollbar": {
            display: "none", // Opcional: oculta el scrollbar en navegadores basados en WebKit
          },
        }}
      >
        {[...Array(20)].map((_, index) => (
          <Box
            key={index}
            flex="0 0 auto" // Evita que los elementos se reduzcan en el scroll horizontal
            minW="200px"
            h="300px"
            bg="gray.700"
            borderRadius="md"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={`download.jpeg`}
              alt="Movie Poster"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export default Carousel;
