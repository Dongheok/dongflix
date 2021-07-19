import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { data } from 'data';
import { Wrapper, Icon } from './styles';

const Header: React.FC = () => (
    <Wrapper>
        <Grid container justifyContent="space-between" className="header_wrap">
            <Grid item>
                {data.map(
                    (x, index) =>
                        index !== 2 && (
                            <NavLink key={x.key} to={x.key} activeClassName="on">
                                <Icon iconUrl={x.icon} coverUrl={x.cover} className="icon" />
                            </NavLink>
                        ),
                )}
            </Grid>
            <Grid item>
                {data.map(
                    (x, index) =>
                        index === 2 && (
                            <NavLink key={x.key} to={x.key} activeClassName="on">
                                <Icon iconUrl={x.icon} coverUrl={x.cover} className="icon" />
                            </NavLink>
                        ),
                )}
            </Grid>
        </Grid>
    </Wrapper>
);

export default Header;
