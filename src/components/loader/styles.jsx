import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99999;
    background: #000;
    & .ProgressBar {
        position: relative;
        width: 100%;
        & > div {
            background: #27ae60;
        }
    }
`;
export default Wrapper;