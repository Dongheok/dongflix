import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

// api

export const movieApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upComing: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    movieDetail: (id: number) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: (searchText: string) =>
        api.get('/search/movie', {
            params: {
                // 해외 공용 api라 encodeURIComponent(인코딩) 된 문자가 와야함
                query: searchText,
            },
        }),
};

export const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get('tv/popular'),
    airingToday: () => api.get('tv/airing_today'),
    tvDetail: (id: number) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: 'video',
            },
        }),
    search: (searchText: string) =>
        api.get('/search/tv', {
            params: {
                // 해외 공용 api라 encodeURIComponent(인코딩) 된 문자가 와야함
                query: searchText,
            },
        }),
};
