import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {searchShows} from '../services/tmdb-api';
import TitleList from '../components/TitleList';
import Pagination from "../components/Pagination";
import style from "../Search.module.css";

const SearchPage = ({watchList, toggle}) => {
    const [titles, setTitles] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    const currentPage = params.get('page') || 1;

    const nextPage = () => {
        gotoPage(parseInt(currentPage) + 1)
    }

    const previousPage = () => {
        gotoPage(parseInt(currentPage) - 1)
    }

    const gotoPage = (page) => {
        navigate({pathname: "/search", search: `query=${query}&page=${page}`})
    }

    useEffect(() => {
        if (query) {
            setIsLoading(true)
            searchShows(query, currentPage).then(({results, total_pages}) => {
                setIsLoading(false)
                setTitles(results)
                setTotalPages(total_pages)
                // scroll window back to top after loading the new results
                window.scrollTo(0, 0)
            });
        }
    }, [query, currentPage]);

    return (
        <>
            {titles ? (
                <TitleList
                    name={`shows matching your search: "${query}"`}
                    titles={titles}
                    watchList={watchList}
                    toggle={toggle}
                />
            ) : (
                isLoading ?
                    <div className={style.messageTitle}>Loading...</div>
                    : <div className={style.messageTitle}>No results found for this search</div>

            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                next={nextPage}
                previous={previousPage}
                gotoPage={gotoPage}
            />
        </>
    );
};

export default SearchPage;
