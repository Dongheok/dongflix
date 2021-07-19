import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import LoadingBar from 'components/loading-bar';

import Routes from './Routes';

const App: React.FC = () => {
    const { isLoading } = useSelector((state: RootState) => state.root);
    return (
        <ThemeProvider theme={theme}>
            {isLoading && <LoadingBar />}
            <Routes />
        </ThemeProvider>
    );
};

export default App;
