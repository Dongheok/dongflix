import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import {
    MOVIE_CONTENT_REQUEST,
    MOVIE_CONTENT_SUCCESS,
    MOVIE_CONTENT_FAIL,
    TV_CONTENT_REQUEST,
    TV_CONTENT_SUCCESS,
    TV_CONTENT_FAIL,
    DETAIL_CONTENT_REQUEST,
    DETAIL_CONTENT_SUCCESS,
    DETAIL_CONTENT_FAIL,
    SEARCH_CONTENT_REQUEST,
    SEARCH_CONTENT_SUCCESS,
    SEARCH_CONTENT_FAIL,
} from 'redux/types/content';

async function movieContentAPI() {
    const nowPlaying = await axios.get('movie/now_playing');
    const upComing = await axios.get('movie/upcoming');
    const popular = await axios.get('movie/popular');
    return {
        nowPlaying: nowPlaying.data.results,
        upComing: upComing.data.results,
        popular: popular.data.results,
    };
}

function* movieContent() {
    try {
        //  call : 동기 실행
        //  fork : 비동기 실행
        const result: AxiosResponse<{ result: any[] }> = yield call(movieContentAPI);
        yield put({
            type: MOVIE_CONTENT_SUCCESS,
            data: result,
        });
    } catch (e) {
        console.error(e);
        //  put : 특정 액션 디스패치
        yield put({
            type: MOVIE_CONTENT_FAIL,
            error: e.response.data,
        });
    }
}

async function tvContentAPI() {
    const topRated = await axios.get('tv/top_rated');
    const popular = await axios.get('tv/popular');
    const airingToday = await axios.get('tv/airing_today');
    return {
        topRated: topRated.data.results,
        popular: popular.data.results,
        airingToday: airingToday.data.results,
    };
}

function* tvContent() {
    try {
        //  call : 동기 실행
        //  fork : 비동기 실행
        const result: AxiosResponse<{ result: any[] }> = yield call(tvContentAPI);
        yield put({
            type: TV_CONTENT_SUCCESS,
            data: result,
        });
    } catch (e) {
        console.error(e);
        //  put : 특정 액션 디스패치
        yield put({
            type: TV_CONTENT_FAIL,
            error: e.response.data,
        });
    }
}

async function detailContentAPI(obj: { content: string; id: number }) {
    return axios.get(obj.content === 'movie' ? `movie/${obj.id}` : `tv/${obj.id}`, {
        params: {
            append_to_response: 'videos',
        },
    });
}

function* detailContent(action: any) {
    try {
        //  call : 동기 실행
        //  fork : 비동기 실행
        const result: AxiosResponse<{ data: object }> = yield call(detailContentAPI, {
            content: action.content,
            id: action.id,
        });
        yield put({
            type: DETAIL_CONTENT_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        //  put : 특정 액션 디스패치
        yield put({
            type: DETAIL_CONTENT_FAIL,
            error: e.response.data,
        });
    }
}

function movieSearchContentAPI(searchText: string) {
    return axios.get('/search/movie', {
        params: {
            query: searchText,
        },
    });
}

function tvSearchContentAPI(searchText: string) {
    return axios.get('/search/tv', {
        params: {
            query: searchText,
        },
    });
}

function* searchContent(action: any) {
    try {
        //  call : 동기 실행
        //  fork : 비동기 실행
        const movie: AxiosResponse<{ results: any[] }> = yield call(movieSearchContentAPI, action.searchText);
        const tv: AxiosResponse<{ results: any[] }> = yield call(tvSearchContentAPI, action.searchText);
        yield put({
            type: SEARCH_CONTENT_SUCCESS,
            data: {
                movie: movie.data.results,
                tv: tv.data.results,
            },
        });
    } catch (e) {
        console.error(e);
        //  put : 특정 액션 디스패치
        yield put({
            type: SEARCH_CONTENT_FAIL,
            error: e.response.data,
        });
    }
}

function* watchMovieContent() {
    yield takeLatest(MOVIE_CONTENT_REQUEST, movieContent);
}

function* watchTvContent() {
    yield takeLatest(TV_CONTENT_REQUEST, tvContent);
}

function* watchDetailContent() {
    yield takeLatest(DETAIL_CONTENT_REQUEST, detailContent);
}

function* watchSearchContent() {
    yield takeLatest(SEARCH_CONTENT_REQUEST, searchContent);
}

export default function* userSaga() {
    yield all([fork(watchMovieContent), fork(watchTvContent), fork(watchDetailContent), fork(watchSearchContent)]);
}
