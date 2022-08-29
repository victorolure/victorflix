import {useEffect, useState} from 'react';
import {getShowsByProviderId, getTvProviders} from '../services/tmdb-api';
import {useSearchParams} from "react-router-dom";
import ProviderDetails from "../components/ProviderDetails";
import ProviderList from "../components/ProviderList";
import style from "../Provider.module.css"

const ProvidersPage = ({watchList, toggle}) => {
    const [providers, setTvProviders] = useState([]);
    const [providerShows, setProviderShows] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [currentProvider, setCurrentProvider] = useState(null)
    const [searchParam] = useSearchParams();

    useEffect(() => {
        const currentProviderId = searchParam.get("id")
        setIsLoading(true)
        getTvProviders().then(providersResult => {
            setTvProviders(providersResult)
            if (currentProviderId) {
                getShowsByProviderId(currentProviderId).then(shows => {
                    setProviderShows(shows)
                    setCurrentProvider(providersResult.find(provider => provider.provider_id === parseInt(currentProviderId)))
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        });
    }, [searchParam])

    return (
        <div>
            {
                searchParam.get("id") ?
                    (
                        currentProvider ?
                            <ProviderDetails
                                shows={providerShows}
                                watchList={watchList}
                                toggle={toggle}
                                provider={currentProvider}
                            /> :
                            (isLoading ?
                                    <div className={style.doesNotExistTitle}>Loading...</div>
                                    : <div className={style.doesNotExistTitle}>Not found</div>
                            )
                    )
                    :
                    (
                        !isLoading ?
                            <ProviderList
                                providers={providers}
                            />
                            :
                            <div className={style.doesNotExistTitle}>Loading...</div>
                    )
            }
        </div>
    );
}

export default ProvidersPage;