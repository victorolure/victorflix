import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../services/tmdb-api';

const DetailsPage = () => {
  const [showDetails, setShowDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getShowDetails(id).then((details) => setShowDetails(details));
  }, [id]);

  return (
    <>
      {showDetails ? (
        <div className="show-details">
          <img
            src={`https://image.tmdb.org/t/p/original${showDetails.backdrop_path}`}
            alt=""
          />
          <div className="show-details-inner">
            <h1>{showDetails.name}</h1>
            <div className="description">{showDetails.overview}</div>
            <button className="add-to-watchlist">+ Add to watch list</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default DetailsPage;
