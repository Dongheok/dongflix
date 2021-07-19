import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieContent } from 'redux/actions/content';
import { RootState } from 'redux/reducers';

import { Grid } from '@material-ui/core';
import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';

const Movie: React.FC = () => {
    const dispatch = useDispatch();
    const { movieContentData, movieContentError } = useSelector((state: RootState) => state.content);

    useEffect(() => {
        dispatch(setMovieContent());
    }, []);
    return (
        <>
            <Helmet>
                <title>Movies | Dongflix</title>
            </Helmet>
            <PosterWrap>
                {movieContentData.nowPlaying && movieContentData.nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {movieContentData.nowPlaying.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster type="movie" rating={x.vote_average} id={x.id} imageUrl={x.poster_path} title={x.original_title} year={x.release_date.substring(0, 4)} />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {movieContentData.upComing && movieContentData.upComing.length > 0 && (
                    <Section title="UpComing Movies">
                        {movieContentData.upComing.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster type="movie" rating={x.vote_average} id={x.id} imageUrl={x.poster_path} title={x.original_title} year={x.release_date.substring(0, 4)} />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {movieContentData.popular && movieContentData.popular.length > 0 && (
                    <Section title="Popular Movies">
                        {movieContentData.popular.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster type="movie" rating={x.vote_average} id={x.id} imageUrl={x.poster_path} title={x.original_title} year={x && x.release_date && x.release_date.substring(0, 4)} />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {movieContentError && <Message text={movieContentError} />}
            </PosterWrap>
        </>
    );
};

export default Movie;
