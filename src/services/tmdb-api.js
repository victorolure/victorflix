const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;
const discoverEndpoint = '/discover/tv';
const searchEndpoint = '/search/tv';
const detailsEndpoint = '/tv';
const providersEndpoint = '/watch/providers/tv'

export const getShowsByProviderId = async (id) => {
    const request = await fetch(
        BASE_URL +
        discoverEndpoint +
        `?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_providers=${id}&watch_region=CA`
    );
    const response = await request.json();
    return response.results;
};

export const getShowsByAllProviders = (providers) => {
    const responses = [];
    Object.keys(providers).forEach((provider) => {
        responses.push(
            getShowsByProviderId(providers[provider].id).then((shows) => [
                providers[provider].displayName,
                shows
            ])
        );
    });
    return Promise.all(responses);
};

export const searchShows = async (query, page  = 1) => {
    const URL =
        BASE_URL +
        searchEndpoint +
        `?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
    const request = await fetch(URL);
    return request.json();
};

export const getShowDetails = async (id) => {
    const URL =
        BASE_URL + detailsEndpoint + `/${id}?api_key=${API_KEY}&language=en-US`;
    const request = await fetch(URL);
    const response = await request.json();
    const details = response;
    return details;
};


export const getTvProviders = async () => {
    const request = await fetch(BASE_URL + providersEndpoint + `?api_key=${API_KEY}&language=en-US&watch_region=CA`)
    const response = await request.json();
    return response.results;
}

console.log(getTvProviders())