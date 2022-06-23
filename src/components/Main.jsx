import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const searchResturants = () => {
    console.log("This is the search resturants function!");
  };

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchResturants={searchResturants}
      />
      <MainText />
      <SearchResults search={search} />
    </>
  );
};

export default Main;
