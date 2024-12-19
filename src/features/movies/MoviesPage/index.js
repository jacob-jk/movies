import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pager from "../../../common/Pager";
import { MoviesListItem } from "../../../common/MoviesListItem";
import {
  fetchMovies,
  fetchMoviesSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectMovies,
  selectMoviesCount,
  selectPage,
} from "./moviesSlice";
import { MoviesWrapper } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import LoadingPage from "../../../common/LoadingPage";
import { TileLink } from "../../../common/TileLink";
import { useQueryParameter } from "../../queryParameters";
import { searchQueryParamName } from "../../queryParamNames";
import NoResultsPage from "../../../common/NoResultsPage";
import { usePage } from "../../../common/Utilities/utilities";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const page = usePage(selectPage);
  const moviesCount = useSelector(selectMoviesCount);

  useEffect(() => {
    query
      ? dispatch(fetchMoviesSearchResults({ query, page }))
      : dispatch(fetchMovies(page));
  }, [dispatch, query, page]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader
              title={query ? `Search results for "${query}"` : `Popular movies`}
            />
            <LoadingPage />
          </>
        ) : movies?.length === 0 ? (
          <NoResultsPage query={query} />
        ) : (
          <>
            <PageHeader
              title={
                query
                  ? `Search results for "${query}" (${moviesCount})`
                  : `Popular movies`
              }
            />
            <MoviesWrapper>
              {movies?.map((movie) => (
                <TileLink to={`/movies/${movie.id}`} key={movie.id}>
                  <MoviesListItem
                    poster={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                    genres={movie.genre_ids}
                  />
                </TileLink>
              ))}
            </MoviesWrapper>
            <Pager currentPage={page} lastPage={lastPage} />
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesListPage;
