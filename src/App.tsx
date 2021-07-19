import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

import LoadingBar from 'components/loading-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import Routes from './Routes';

const App: React.FC = () => {
    const { movieContentRequest, tvContentRequest } = useSelector((state: RootState) => state.content);

    return (
        <ThemeProvider theme={theme}>
            {(movieContentRequest || tvContentRequest) && <LoadingBar />}
            <Routes />
        </ThemeProvider>
    );
};

export default App;
