// ie에서 immer이슈가 생길시,
import { produce, enableES5 } from 'immer';

const Immer = (state: object, funtion: any) => {
    enableES5();
    return produce(state, funtion);
};

export default Immer;
