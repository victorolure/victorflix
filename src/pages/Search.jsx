import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchShows } from "../services/tmdb-api";
import TitleList from "../components/TitleList";

const SearchPage = () => {
  const [titles, setTitles] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  useEffect(() => {
    if (query) {
      searchShows(query).then((titles) => setTitles(titles));
    }
  }, [query]);

  return (
    <>
      {titles ? (
        <TitleList name={`shows matching ${query}`} titles={titles} />
      ) : (
        <h2>No matching results</h2>
      )}
    </>
  );
};

export default SearchPage;
