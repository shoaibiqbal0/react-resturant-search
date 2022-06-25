import {
  Badge,
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import ResultCard from "./ResultCard";

const SearchResults = ({ searchResults, searchTerm, searchLocation }) => {
  return (
    <VStack align="left" p="1" mx="1">
      <Text>
        Showing results for {searchTerm} in {searchLocation}
      </Text>
      <SimpleGrid columns={[1, null, 2]} gap="2">
        {searchResults.businesses.map((searchItem, index) => {
          return <ResultCard key={index} searchItem={searchItem} />;
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default SearchResults;
