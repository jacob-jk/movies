import { all } from "redux-saga/effects";
import { watchFetchMovie } from "./features/movies/MoviePage/movieSaga";
import { watchFetchMovies } from "./features/movies/MoviesPage/moviesSaga";
import { watchFetchPopularPeople } from "./features/people/PeoplePage/peopleSaga";
import { watchFetchPerson } from "./features/people/PersonPage/personSaga";
import { watchFetchGenres } from "./features/movies/MoviesGenres/genresSaga";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchPopularPeople(),
    watchFetchMovie(),
    watchFetchPerson(),
    watchFetchGenres(),
  ]);
}
