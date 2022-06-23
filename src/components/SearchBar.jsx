import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch, searchResturants }) => {
  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchResturants();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex p="5" justify="center">
        <Flex w="100%" maxW="40em">
          <Input
            onChange={handleChange}
            value={search}
            placeholder="Search for resturants.."
            borderLeftRadius="full"
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
