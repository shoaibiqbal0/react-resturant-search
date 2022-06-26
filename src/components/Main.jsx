import { Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      />
      {isLoading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : null}
      {Object.keys(searchResults).length === 0 ? (
        <MainText />
      ) : (
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
