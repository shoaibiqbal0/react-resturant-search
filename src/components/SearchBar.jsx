import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import searchResturants from "../api/api";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setSearchResults,
  searchLocation,
  setSearchLocation,
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchResturants("/businesses/search", {
      location: "tooting",
    });
    setSearchResults(results);
    console.log(results);
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
          />
          <Input
            onChange={handleLocationChange}
            value={searchLocation}
            placeholder="Location.."
            variant="filled"
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
