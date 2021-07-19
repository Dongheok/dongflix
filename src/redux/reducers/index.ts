import { combineReducers } from 'redux';

import content from 'redux/reducers/content';

// useSelector를 위해 필요
export type RootState = {
    content: {
        movieContentRequest: boolean;
        movieContentError: '';
        movieContentData: {
            nowPlaying: any[];
            upComing: any[];
            popular: any[];
        };
        tvContentRequest: boolean;
        tvContentError: '';
        tvContentData: {
            topRated: any[];
            popular: any[];
            airingToday: any[];
        };
        detailContentRequest: boolean;
        detailContentError: '';
        detailContentData: any;
        searchContentRequest: boolean;
        searchContentError: '';
        searchContentData: {
            movie: any[];
            tv: any[];
        };
    };
};

const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        default: {
            const combinedReducer = combineReducers({
                content,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;
