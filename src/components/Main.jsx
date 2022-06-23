import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const apiKey = process.env.REACT_APP_API;
  const baseUrl = "https://api.yelp.com/v3";
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const searchResturants = () => {
    console.log();
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
