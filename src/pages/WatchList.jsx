import { useState, useEffect } from 'react';
import TitleList from '../components/TitleList';

const WatchListPage = () => {
  const [titles, setTitles] = useState(null);

  useEffect(() => {
    localStorage.setItem('watch list', JSON.stringify(titles));
  }, [titles]);

  return <>{titles ? <TitleList titles={titles} /> : <h2>Loading...</h2>}</>;
};

export default WatchListPage;
