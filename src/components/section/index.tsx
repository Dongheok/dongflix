import React from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';

type SectionType = {
    title: string;
    children?: React.ReactNode;
};

const Section: React.FC<SectionType> = ({ title, children }) => (
    <Wrapper>
        <h2>{title}</h2>
        <Grid container>{children}</Grid>
    </Wrapper>
);

export default Section;
