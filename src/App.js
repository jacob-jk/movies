import { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header } from "./common/Header";
import MoviesListPage from "./features/movies/MoviesPage";
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";
import MoviePage from "./features/movies/MoviePage";
import { fetchGenres } from "./features/movies/MoviesGenres/genresSlice";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesListPage />
        </Route>
        <Route path={toPerson()}>
          <PersonPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
