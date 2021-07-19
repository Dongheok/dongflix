import { createStore, combineReducers } from 'redux';

import rootReducer from './reducer';

const appReducer = combineReducers({
    root: rootReducer,
});

export const store = createStore(appReducer);

// useSelector를 위해 필요
export type RootState = ReturnType<typeof appReducer>;
