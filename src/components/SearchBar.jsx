import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const handleClick = () => {};

  return (
    <Flex justify="center">
      <Flex p="5">
        <Input
          placeholder="Search for resturants.."
          borderLeftRadius="full"
          variant="filled"
        />
        <IconButton
          onClick={handleClick}
          icon={<FaSearch />}
          borderRightRadius="full"
          size="md"
        >
          Search
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default SearchBar;
