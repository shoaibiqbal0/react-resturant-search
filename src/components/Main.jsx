import { useState } from "react";
import MainText from "./MainText";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <MainText />
      <SearchResults />
    </>
  );
};

export default Main;
