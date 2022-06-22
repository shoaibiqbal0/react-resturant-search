import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const handleClick = () => {};

  return (
    <Flex p="5" justify="center">
      <Flex w="100%" maxW="40em">
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
