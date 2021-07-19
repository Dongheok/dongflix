import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import contentSaga from './content';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use(
    (config: any) => {
        // 요청 바로 직전
        const temp = config;
        temp.params = temp.params || {};
        temp.params.api_key = '4e88b4f1dedb08e14ee3e3dbe7eeb858';
        temp.params.language = 'en-US';
        return temp;
    },
    (error: any) =>
        // 요청 에러 처리를 작성합니다.
        Promise.reject(error),
);

export default function* sagas() {
    yield all([fork(contentSaga)]);
}
