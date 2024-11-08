import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

function HeroBanner() {
  return (
    <Box
      h="500px"
      bgImage="madmax.jpeg"
      bgPos="center"
      bgSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spaceY={4} align="flex-start" maxW="lg" px={4}>
        <Heading size="2xl">Title of the Movie or Show</Heading>
        <Text fontSize="lg">
          A brief description of the movie or show goes here to captivate users.
        </Text>
        <Button colorScheme="red" size="lg">
          Watch Now
        </Button>
        <Button variant="outline" colorScheme="whiteAlpha" size="lg">
          More Info
        </Button>
      </VStack>
    </Box>
  );
}

export default HeroBanner;
