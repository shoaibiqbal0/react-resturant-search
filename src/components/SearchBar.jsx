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
  onOpen,
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
    console.log(results);
    setIsLoading(false);
    onOpen();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex p="5" justify="center">
        <Flex w="100%" maxW="40em">
          <Input
            onChange={handleChange}
            value={searchTerm}
            placeholder="Search"
            variant="filled"
            borderRadius="0"
            isRequired
            spellCheck="false"
          />
          <Input
            onChange={handleLocationChange}
            value={searchLocation}
            placeholder="Location"
            variant="filled"
            borderRadius="0"
            isRequired
            spellCheck="false"
          />
          <IconButton
            borderRadius="0"
            type="submit"
            icon={<FaSearch />}
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
