import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./features/movies/MoviePage/movieSlice";
import { moviesReducer } from "./features/movies/MoviesPage/moviesSlice";
import { peopleReducer } from "./features/people/PeoplePage/peopleSlice";
import { personReducer } from "./features/people/PersonPage/personSlice";
import { genresReducer } from "./features/movies/MoviesGenres/genresSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    person: personReducer,
    movie: movieReducer,
    genres: genresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
