import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchResults, setSearchResults] = useState({});

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />
      <MainText />
      <SearchResults />
    </>
  );
};

export default Main;
