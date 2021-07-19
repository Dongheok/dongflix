import { MOVIE_CONTENT_REQUEST, TV_CONTENT_REQUEST, DETAIL_CONTENT_REQUEST, SEARCH_CONTENT_REQUEST } from 'redux/types/content';

export const setMovieContent = () => ({
    type: MOVIE_CONTENT_REQUEST,
    data: {},
    error: '',
});

export const setTvContent = () => ({
    type: TV_CONTENT_REQUEST,
    data: {},
    error: '',
});

type DetailDataType = {
    content: string;
    id: number;
};

export const setDetailContent = (obj: DetailDataType) => ({
    type: DETAIL_CONTENT_REQUEST,
    content: obj.content,
    id: obj.id,
    data: {},
    error: '',
});

export const searchContent = (searchText: string) => ({
    type: SEARCH_CONTENT_REQUEST,
    searchText,
    data: {},
    error: '',
});

// 액션 객체들을 위한 타입 정의
export type ActionType = ReturnType<typeof setMovieContent> | ReturnType<typeof setMovieContent> | ReturnType<typeof setDetailContent> | ReturnType<typeof searchContent>;
