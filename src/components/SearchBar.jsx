import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import searchResturants from "../api/api";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setSearchResults,
  searchLocation,
  setSearchLocation,
  setIsLoading,
  onToggle,
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const results = await searchResturants("/businesses/search", {
      term: searchTerm,
      location: searchLocation,
    });
    setSearchResults(results);
    setIsLoading(false);
    onToggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex p="5" justify="center">
        <Flex w="100%" maxW="40em">
          <Input
            onChange={handleChange}
            value={searchTerm}
            placeholder="Search for?"
            borderLeftRadius="full"
            variant="filled"
            isRequired
          />
          <Input
            onChange={handleLocationChange}
            value={searchLocation}
            placeholder="Location.."
            variant="filled"
            borderRadius="0"
            isRequired
          />
          <IconButton
            type="submit"
            icon={<FaSearch />}
            borderRightRadius="full"
            size="md"
          >
            Search
          </IconButton>
        </Flex>
      </Flex>
    </form>
  );
};

export default SearchBar;
