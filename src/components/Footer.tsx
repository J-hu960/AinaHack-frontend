import { Box, Text, VStack,HStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="black" color="gray.500" py={8} textAlign="center">
      <VStack spaceY={2}>
        <Text>Questions? Contact us.</Text>
        <HStack spaceX={4}>
          <Text cursor="pointer">FAQ</Text>
          <Text cursor="pointer">Help Center</Text>
          <Text cursor="pointer">Terms of Use</Text>
          <Text cursor="pointer">Privacy</Text>
        </HStack>
        <Text fontSize="sm" mt={4}>
         MIA
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
