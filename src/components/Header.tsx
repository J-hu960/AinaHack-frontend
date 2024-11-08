import React from "react";
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="#D2B48C" p={4} position="sticky" top={0} zIndex={10}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="black">
          JAA
        </Text>
        <HStack spaceY={6}>
          <Text cursor="pointer" color="black">Home</Text>
          <Text cursor="pointer" color="black">TV Shows</Text>
          <Text cursor="pointer" color="black">Movies</Text>
          <Text cursor="pointer" color="black">New & Popular</Text>
          <Text cursor="pointer" color="black">My List</Text>
        </HStack>
        <Button variant="ghost" color="black">
          Sign In
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
