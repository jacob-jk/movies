import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { PageWrapper } from "../../../common/PageWrapper/styled";
import LoadingPage from "../../../common/LoadingPage";
import MovieTile from "../../../common/MovieTile";
import PageHeader from "../../../common/PageHeader";
import { PersonTile } from "../../../common/PersonTile";
import { TileLink } from "../../../common/TileLink";
import {
  fetchMovie,
  selectError,
  selectLoading,
  selectMovie,
  selectMovieCredits,
} from "./movieSlice";
import { TileWrapper } from "./styled";
import { getNonDuplicatedItems } from "../../../common/Utilities/utilities";

const MoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const movieCredits = useSelector(selectMovieCredits);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMovie(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error || !movie?.id ? (
        <ErrorPage />
      ) : (
        <>
          <MovieDetails
            poster={movie.backdrop_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
          <Container>
            <MovieTile
              title={movie.title}
              releaseYear={movie.release_date}
              releaseDate={movie.release_date}
              productionCountries={movie.production_countries}
              overview={movie.overview}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              poster={movie.poster_path}
              tags={movie.genres}
            />
            {movieCredits.cast.length > 0 && (
              <TileWrapper>
                <PageHeader title="Cast" />
                <PageWrapper>
                  {getNonDuplicatedItems(movieCredits.cast, 12).map(
                    (person) => (
                      <TileLink to={`/people/${person.id}`} key={person.id}>
                        <PersonTile
                          profile={person.profile_path}
                          fullName={person.name}
                          role={person.character}
                        />
                      </TileLink>
                    )
                  )}
                </PageWrapper>
              </TileWrapper>
            )}
            {movieCredits.crew.length > 0 && (
              <TileWrapper>
                <PageHeader title="Crew" />
                <PageWrapper>
                  {getNonDuplicatedItems(movieCredits.crew, 12).map(
                    (person) => (
                      <TileLink to={`/people/${person.id}`} key={person.id}>
                        <PersonTile
                          profile={person.profile_path}
                          fullName={person.name}
                          role={person.department}
                        />
                      </TileLink>
                    )
                  )}
                </PageWrapper>
              </TileWrapper>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default MoviePage;
