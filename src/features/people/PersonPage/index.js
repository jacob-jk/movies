import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import ErrorPage from "../../../common/ErrorPage";
import LoadingPage from "../../../common/LoadingPage";
import PersonDetails from "./PersonDetails";
import {
  selectPerson,
  fetchPersonId,
  selectPersonCredits,
  selectError,
  selectLoading,
} from "./personSlice";
import { useParams } from "react-router-dom";
import { TileWrapper } from "./styled";
import { TileLink } from "../../../common/TileLink";
import { MoviesListItem } from "../../../common/MoviesListItem";
import { getNonDuplicatedItems } from "../../../common/Utilities/utilities";

const PersonPage = () => {
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const personCredits = useSelector(selectPersonCredits);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonId(id));
  }, [dispatch, id]);

  return (
    <>
      <Container>
        {loading ? (
          <LoadingPage />
        ) : error || !person?.id ? (
          <ErrorPage />
        ) : (
          <>
            <PersonDetails
              poster={person.profile_path}
              name={person.name}
              birthday={person.birthday}
              birthplace={person.place_of_birth}
              biography={person.biography}
            />
            {personCredits.cast.length > 0 && (
              <>
                <PageHeader
                  title={`Movies - cast (${personCredits.cast.length})`}
                />
                <TileWrapper>
                  {getNonDuplicatedItems(personCredits.cast).map((movie) => (
                    <TileLink to={`/movies/${movie.id}`} key={movie.id}>
                      <MoviesListItem
                        poster={movie.poster_path}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        date={movie.release_date}
                        voteAverage={movie.vote_average}
                        voteCount={movie.vote_count}
                        genres={movie.genre_ids}
                      />
                    </TileLink>
                  ))}
                </TileWrapper>
              </>
            )}
            {personCredits.crew.length > 0 && (
              <>
                <PageHeader
                  title={`Movies - crew (${personCredits.crew.length})`}
                />
                <TileWrapper>
                  {getNonDuplicatedItems(personCredits.crew).map((movie) => (
                    <TileLink to={`/movies/${movie.id}`} key={movie.id}>
                      <MoviesListItem
                        poster={movie.poster_path}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        date={movie.release_date}
                        voteAverage={movie.vote_average}
                        voteCount={movie.vote_count}
                        genres={movie.genre_ids}
                      />
                    </TileLink>
                  ))}
                </TileWrapper>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default PersonPage;
