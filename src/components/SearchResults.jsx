import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const SearchResults = ({ searchResults, searchTerm, searchLocation }) => {
  return (
    <VStack align="left" p="5">
      <Text>
        {searchResults.total} results for {searchLocation} in {searchLocation}
      </Text>
      <SimpleGrid columns={[2, 2, 4]} gap="2">
        <Box>Hello</Box>
        <Box>Hello</Box>
        <Box>Hello</Box>
        <Box>Hello</Box>
      </SimpleGrid>
    </VStack>
  );
};

export default SearchResults;
