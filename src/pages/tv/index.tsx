/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { setTvContent } from 'redux/actions/content';
import { RootState } from 'redux/reducers';

import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';

const Tv: React.FC = () => {
    const { tvContentData, tvContentError } = useSelector((state: RootState) => state.content);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTvContent());
    }, []);
    return (
        <>
            <Helmet>
                <title>Tv | Dongflix</title>
            </Helmet>
            <PosterWrap>
                {/*  */}
                {tvContentData.topRated && tvContentData.topRated.length > 0 && (
                    <Section title="Top Rated">
                        {tvContentData.topRated.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster id={x.id} title={x.original_name} imageUrl={x.poster_path} rating={x.vote_average} year={x.first_air_date.substring(0, 4)} type="tv" />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {tvContentData.popular && tvContentData.popular.length > 0 && (
                    <Section title="Popular TV">
                        {tvContentData.popular.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster id={x.id} title={x.original_name} imageUrl={x.poster_path} rating={x.vote_average} year={x.first_air_date.substring(0, 4)} type="tv" />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {tvContentData.airingToday && tvContentData.airingToday.length > 0 && (
                    <Section title="Airing Today TV">
                        {tvContentData.airingToday.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster id={x.id} title={x.original_name} imageUrl={x.poster_path} rating={x.vote_average} year={x.first_air_date.substring(0, 4)} type="tv" />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {tvContentError && <Message text={tvContentError} />}
            </PosterWrap>
        </>
    );
};

export default Tv;
