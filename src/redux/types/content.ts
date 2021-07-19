// 액션 type 선언
// as const 를 안하면 string으로 정의 되어 리듀서 구현 오류 생김
export const SET_IS_LOADING = 'SET_IS_LOADING' as const;
export const MOVIE_CONTENT_REQUEST = 'MOVIE_CONTENT_REQUEST' as const;
export const MOVIE_CONTENT_SUCCESS = 'MOVIE_CONTENT_SUCCESS' as const;
export const MOVIE_CONTENT_FAIL = 'MOVIE_CONTENT_FAIL' as const;
export const TV_CONTENT_REQUEST = 'TV_CONTENT_REQUEST' as const;
export const TV_CONTENT_SUCCESS = 'TV_CONTENT_SUCCESS' as const;
export const TV_CONTENT_FAIL = 'TV_CONTENT_FAIL' as const;
export const DETAIL_CONTENT_REQUEST = 'DETAIL_CONTENT_REQUEST' as const;
export const DETAIL_CONTENT_SUCCESS = 'DETAIL_CONTENT_SUCCESS' as const;
export const DETAIL_CONTENT_FAIL = 'DETAIL_CONTENT_FAIL' as const;
export const SEARCH_CONTENT_REQUEST = 'SEARCH_CONTENT_REQUEST' as const;
export const SEARCH_CONTENT_SUCCESS = 'SEARCH_CONTENT_SUCCESS' as const;
export const SEARCH_CONTENT_FAIL = 'SEARCH_CONTENT_FAIL' as const;
