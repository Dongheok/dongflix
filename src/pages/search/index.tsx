import React, { useState, useEffect, useCallback } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { searchContent } from 'redux/actions/content';

import { Grid } from '@material-ui/core';
import Section from 'components/section';
import Poster from 'components/poster';
import PosterWrap from 'components/poster-wrap';
import Message from 'components/message';
import Wrapper from './styles';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const { searchContentData } = useSelector((state: RootState) => state.content);

    const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const searchFunction = async (term: string) => {
        let searchTerm: string | undefined = '';
        // 새로고침 시, 전에 검색한 기록이 있으면 반영
        if (term !== '') {
            searchTerm = term;
            // 화면에 표시하는 데이터는 디코딩 문자열
            setCurrentSearchTerm(decodeURIComponent(JSON.parse(searchTerm)));
            setErrorMessage(decodeURIComponent(JSON.parse(searchTerm)));
        } else {
            // 통신하는 데이터는 인코딩 문자열
            searchTerm = encodeURIComponent(currentSearchTerm);
            // 로컬 저장소에 json형태로 set
            localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
            setErrorMessage(decodeURIComponent(JSON.parse(JSON.stringify(searchTerm))));
        }
        dispatch(searchContent(searchTerm));
    };

    const onChangeSearchText = useCallback(
        (e) => {
            setCurrentSearchTerm(e.target.value);
        },
        [currentSearchTerm],
    );

    const onSubmitSearchText = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                searchFunction('');
            }
        },
        [currentSearchTerm],
    );

    useEffect(() => {
        const prevSearchTerm = localStorage.getItem('searchTerm');
        // 만약, 전에 검색했던 검색어가 없거나 빈게 아니면 히스토리를 가져와라
        if (prevSearchTerm && prevSearchTerm !== `""`) {
            searchFunction(prevSearchTerm);
        }
        console.log(errorMessage);
    }, []);

    return (
        <Wrapper>
            <Helmet>
                <title>Search | Dongflix</title>
            </Helmet>
            {/*  */}
            <Grid className="search_form">
                <input type="text" value={currentSearchTerm} placeholder="Search Movies or TV Shows..." onChange={onChangeSearchText} onKeyUp={onSubmitSearchText} />
            </Grid>
            {/*  */}
            <PosterWrap>
                {searchContentData.movie && searchContentData.movie.length > 0 && (
                    <Section title="Movie Results">
                        {searchContentData.movie.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster
                                    id={x.id}
                                    title={x.original_title}
                                    imageUrl={x.poster_path}
                                    rating={x.vote_average}
                                    year={x && x.release_date && x.release_date.substring(0, 4) && x.release_date.substring(0, 4)}
                                    type="movie"
                                />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {searchContentData.tv && searchContentData.tv.length > 0 && (
                    <Section title="TV Results">
                        {searchContentData.tv.map((x, index) => (
                            <Grid item className="poster" key={x.id}>
                                <Poster
                                    id={x.id}
                                    title={x.original_name}
                                    imageUrl={x.poster_path}
                                    rating={x.vote_average}
                                    year={x && x.first_air_date && x.first_air_date.substring(0, 4) ? x.first_air_date.substring(0, 4) : 'Not Found'}
                                    type="tv"
                                />
                            </Grid>
                        ))}
                    </Section>
                )}
                {/*  */}
                {searchContentData.movie && searchContentData.tv && searchContentData.movie.length === 0 && searchContentData.tv.length === 0 && errorMessage !== '' && (
                    <Message text={`Not Found "${errorMessage}"`} />
                )}
                {/*  */}
            </PosterWrap>
        </Wrapper>
    );
};

export default Search;
