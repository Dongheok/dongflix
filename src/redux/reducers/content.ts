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
import { ActionType } from 'redux/actions/content';
import Immer from 'redux/util/immer';

// 전역 state 값 타입정의
type ReducerType = {
    movieContentRequest: boolean;
    movieContentState: boolean;
    movieContentError: string;
    movieContentData: {
        nowPlaying: any[];
        upComing: any[];
        popular: any[];
    };
    tvContentRequest: boolean;
    tvContentState: boolean;
    tvContentError: string;
    tvContentData: {
        topRated: any[];
        popular: any[];
        airingToday: any[];
    };
    detailContentRequest: boolean;
    detailContentState: boolean;
    detailContentError: string;
    detailContentData: {
        topRated: any[];
        popular: any[];
        airingToday: any[];
    };
    searchContentRequest: boolean;
    searchContentState: boolean;
    searchContentError: string;
    searchContentData: {
        movie: any[];
        tv: any[];
    };
};

// 전역 state 값 초기값 설정
const reducer: ReducerType = {
    movieContentRequest: false,
    movieContentState: false,
    movieContentError: '',
    movieContentData: {
        nowPlaying: [],
        upComing: [],
        popular: [],
    },
    tvContentRequest: false,
    tvContentState: false,
    tvContentError: '',
    tvContentData: {
        topRated: [],
        popular: [],
        airingToday: [],
    },
    detailContentRequest: false,
    detailContentState: false,
    detailContentError: '',
    detailContentData: {
        topRated: [],
        popular: [],
        airingToday: [],
    },
    searchContentRequest: false,
    searchContentState: false,
    searchContentError: '',
    searchContentData: {
        movie: [],
        tv: [],
    },
};

const content = (state: ReducerType = reducer, action: ActionType) =>
    Immer(state, (draft: any) => {
        switch (action.type as any) {
            case MOVIE_CONTENT_REQUEST: {
                draft.movieContentRequest = true;
                draft.movieContentState = false;
                draft.movieContentError = '';
                break;
            }
            case MOVIE_CONTENT_SUCCESS: {
                draft.movieContentRequest = false;
                draft.movieContentState = true;
                draft.movieContentData = action.data;
                break;
            }
            case MOVIE_CONTENT_FAIL: {
                draft.movieContentRequest = false;
                draft.movieContentError = action.error;
                break;
            }
            case TV_CONTENT_REQUEST: {
                draft.tvContentRequest = true;
                draft.tvContentState = false;
                draft.tvContentError = '';
                break;
            }
            case TV_CONTENT_SUCCESS: {
                draft.tvContentRequest = false;
                draft.tvContentState = true;
                draft.tvContentData = action.data;
                break;
            }
            case TV_CONTENT_FAIL: {
                draft.tvContentRequest = false;
                draft.tvContentError = action.error;
                break;
            }
            case DETAIL_CONTENT_REQUEST: {
                draft.detailContentRequest = true;
                draft.detailContentState = false;
                draft.detailContentError = '';
                break;
            }
            case DETAIL_CONTENT_SUCCESS: {
                draft.detailContentRequest = false;
                draft.detailContentState = true;
                draft.detailContentData = action.data;
                break;
            }
            case DETAIL_CONTENT_FAIL: {
                draft.detailContentRequest = false;
                draft.detailContentError = action.error;
                break;
            }
            case SEARCH_CONTENT_REQUEST: {
                draft.searchContentRequest = true;
                draft.searchContentState = false;
                draft.searchContentError = '';
                break;
            }
            case SEARCH_CONTENT_SUCCESS: {
                draft.searchContentRequest = false;
                draft.searchContentState = true;
                draft.searchContentData = action.data;
                break;
            }
            case SEARCH_CONTENT_FAIL: {
                draft.searchContentRequest = false;
                draft.searchContentError = action.error;
                break;
            }
            default:
                break;
        }
    });

export default content;
