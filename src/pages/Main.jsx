import { useState, useEffect } from "react";
import providers from "../data/providers";
import { getShowsByAllProviders } from "../services/tmdb-api";
import TitleList from "../components/TitleList";
function MainPage() {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    getShowsByAllProviders(providers).then((result) => setShows(result));
  }, []);

  return (
    <>
      {shows ? (
        shows.map((showProvider) => {
          return (
            <TitleList
              key={showProvider[0]}
              name={showProvider[0]}
              titles={showProvider[1]}
            />
          );
        })
      ) : (
        <p>Loading... </p>
      )}
    </>
  );
}

export default MainPage;
