import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pager from "../../../common/Pager";
import { PersonTile } from "../../../common/PersonTile";
import {
  fetchPeople,
  fetchPeopleSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectPage,
  selectPeople,
  selectPeopleCount,
} from "./peopleSlice";
import ErrorPage from "../../../common/ErrorPage";
import LoadingPage from "../../../common/LoadingPage";
import { TileLink } from "../../../common/TileLink";
import { useQueryParameter } from "../../queryParameters";
import { searchQueryParamName } from "../../queryParamNames";
import NoResultsPage from "../../../common/NoResultsPage";
import { PeopleWrapper } from "./styled";
import { usePage } from "../../../common/Utilities/utilities";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const page = usePage(selectPage);
  const peopleCount = useSelector(selectPeopleCount);

  useEffect(() => {
    query
      ? dispatch(fetchPeopleSearchResults({ query, page }))
      : dispatch(fetchPeople(page));
  }, [dispatch, query, page]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader
              title={query ? `Search results for "${query}"` : `Popular people`}
            />
            <LoadingPage />
          </>
        ) : people.length === 0 ? (
          <NoResultsPage query={query} />
        ) : (
          <>
            <PageHeader
              title={
                query
                  ? `Search results for "${query}" (${peopleCount})`
                  : `Popular people`
              }
            />
            <PeopleWrapper>
              {people?.map((person) => (
                <TileLink to={`/people/${person.id}`} key={person.id}>
                  <PersonTile
                    profile={person.profile_path}
                    fullName={person.name}
                  />
                </TileLink>
              ))}
            </PeopleWrapper>
            <Pager currentPage={page} lastPage={lastPage} />
          </>
        )}
      </Container>
    </>
  );
};

export default PeoplePage;
