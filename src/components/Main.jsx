import { Collapse, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onToggle={onToggle}
      />
      {isLoading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : null}
      <Collapse in={!isOpen} animateOpacity>
        <MainText />
      </Collapse>
      {isOpen && (
        <SearchResults
          searchTerm={searchTerm}
          searchLocation={searchLocation}
          searchResults={searchResults}
        />
      )}
    </>
  );
};

export default Main;
