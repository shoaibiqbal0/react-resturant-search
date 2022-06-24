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
    fontWeight: "normal",
  };

  return (
    <VStack align="left" p="1" mx="2">
      <Text>
        Showing results for {searchTerm} in {searchLocation}
      </Text>
      <SimpleGrid columns={[1, null, 2]} gap="2">
        <Box
          borderRadius="5"
          border="1px"
          borderColor="gray.200"
          boxShadow="lg"
        >
          <HStack p="1" align="flex-start" py="2">
            <Image
              src={searchResults?.businesses[1]?.image_url}
              maxW="5em"
              borderRadius="5"
            />
            <VStack spacing="0" w="100%" align="left">
              <Text w="100%" fontWeight="bold" fontSize="2xl">
                {searchResults?.businesses[0]?.name}
              </Text>
              <HStack w="100%">
                <Badge style={badgeStyles}>
                  {searchResults?.businesses[0]?.categories[0]?.title}
                </Badge>
                <Badge style={badgeStyles}>
                  {searchResults?.businesses[0]?.categories[1]?.title}
                </Badge>

                <Text fontSize="0.6rem">
                  {searchResults?.businesses[0]?.price}
                </Text>
              </HStack>
              <Text>
                Rating:{" "}
                {[
                  ...Array(Math.floor(searchResults?.businesses[0]?.rating)),
                ].map((item) => {
                  console.log(item);
                })}
              </Text>
              <Text pt="1" fontSize="0.8em">
                <strong>Phone: </strong>
                {searchResults?.businesses[0]?.phone}
              </Text>
              <Text pt="1" fontSize="0.8em">
                <strong>Location: </strong>
                {searchResults?.businesses[0]?.location.address1},{" "}
                {searchResults?.businesses[0]?.location.city}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default SearchResults;
