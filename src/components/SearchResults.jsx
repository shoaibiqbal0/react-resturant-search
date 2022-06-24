import {
  Badge,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const SearchResults = ({ searchResults, searchTerm, searchLocation }) => {
  const badgeStyles = {
    borderRadius: "7px",
    fontSize: "0.6rem",
    textTransform: "capitalize",
  };

  return (
    <VStack align="left" p="1" mx="2">
      <Text>
        Showing results for {searchTerm} in {searchLocation}
      </Text>
      <SimpleGrid columns={[1, null, 2]} gap="2">
        <Box borderRadius="5" border="1px" borderColor="gray.200">
          <HStack p="1" align="flex-start">
            <Image
              src={searchResults?.businesses[1]?.image_url}
              maxW="5em"
              borderRadius="5"
            />
            <VStack spacing="0">
              <Text w="100%" fontWeight="bold">
                {searchResults?.businesses[0]?.name}
              </Text>
              <Flex w="100%">
                <Badge style={badgeStyles}>
                  {searchResults?.businesses[0]?.categories[0]?.title}
                </Badge>
                <Badge style={badgeStyles}>
                  {searchResults?.businesses[0]?.categories[1]?.title}
                </Badge>
              </Flex>
            </VStack>
          </HStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default SearchResults;
