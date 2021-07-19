import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setDetailContent } from 'redux/actions/content';

import { Grid } from '@material-ui/core';
import Message from 'components/message';
import { Backdrop, Wrapper } from './styles';

const Detail = () => {
    const { detailContentData, detailContentError } = useSelector((state: RootState) => state.content);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams<any>();

    const parseIntId = parseInt(id, 10);

    const dataType = history.location.pathname.split('/')[1];

    const [youtubeSw, setYoutubeSw] = useState<boolean>(false);

    const onClickYoutube = useCallback(() => {
        setYoutubeSw(!youtubeSw);
    }, [youtubeSw]);

    useEffect(() => {
        // id 없을 때 메인페이지로 유도
        if (isNaN(parseIntId)) {
            history.push('/');
        } else if (dataType === 'movie') {
            dispatch(
                setDetailContent({
                    content: 'movie',
                    id: parseIntId,
                }),
            );
        } else {
            dispatch(
                setDetailContent({
                    content: 'tv',
                    id: parseIntId,
                }),
            );
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Detail | Dongflix</title>
            </Helmet>
            {/*  */}
            {detailContentError !== '' ? (
                <Message text={detailContentError} />
            ) : (
                <Wrapper>
                    <Backdrop bgUrl={detailContentData.backdrop_path ? `https://image.tmdb.org/t/p/original${detailContentData.backdrop_path}` : '/dongflix/images/notVideo.jpg'} />
                    <Grid container className="detail">
                        <img
                            src={detailContentData.poster_path ? `https://image.tmdb.org/t/p/original${detailContentData.poster_path}` : '/dongflix/images/notVideo.jpg'}
                            alt="poster"
                            className="poster"
                        />
                        <Grid className="text">
                            <Grid container alignItems="center">
                                <Grid item>
                                    <h2>
                                        {detailContentData.original_title}
                                        {detailContentData.original_name}
                                    </h2>
                                    <h3>
                                        {detailContentData?.genres && detailContentData?.genres.length > 0 ? (
                                            <>
                                                <span className="genres">
                                                    {detailContentData.genres.map((x: any, index: number): any => (
                                                        <em key={x.name} className={index + 1 === detailContentData.genres.length ? 'last' : ''}>
                                                            {x.name}
                                                            &nbsp;
                                                            {index + 1 !== detailContentData.genres.length && '/'}
                                                        </em>
                                                    ))}
                                                </span>
                                            </>
                                        ) : (
                                            'Not Found'
                                        )}

                                        <span>
                                            {detailContentData.release_date?.substring(0, 4)}
                                            {detailContentData.first_air_date?.substring(0, 4)}
                                        </span>
                                        <span>
                                            {detailContentData?.runtime}
                                            {detailContentData?.episode_run_time}
                                            &nbsp;min
                                        </span>
                                        <span className="rating">
                                            {detailContentData?.vote_average && (
                                                <span className="star">
                                                    <span
                                                        className="star_cover"
                                                        style={{
                                                            width: `${detailContentData?.vote_average * 10}%`,
                                                        }}
                                                    />
                                                </span>
                                            )}
                                        </span>
                                    </h3>
                                    <a href={detailContentData?.homepage ? `${detailContentData.homepage}` : '/'} target="_blank" rel="noopener noreferrer" className="review">
                                        READ REVIEW
                                    </a>
                                    <p>{detailContentData?.overview}</p>
                                    {detailContentData.videos?.results[0]?.key && (
                                        <Grid className={`youtube ${youtubeSw && 'on'}`}>
                                            <Grid className="btn_youtube" onClick={onClickYoutube} />
                                            <Grid className="iframe_wrap">
                                                <iframe
                                                    title="youtube"
                                                    src={detailContentData.videos.results[0].key && `https://www.youtube.com/embed/${detailContentData.videos.results[0].key}`}
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                />
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Wrapper>
            )}
            {/*  */}
        </>
    );
};

export default Detail;
