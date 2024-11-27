import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Navigation from "./common/Navigation";
import { toFilm, toFilms, toPeople, toPerson } from "./routes";
import FilmsPage from "./feature/films/FilmsPage/FilmsPage";
import FilmPage from "./feature/films/FilmPage/FilmPage";
import PersonPage from "./feature/people/PersonPage/PersonPage";
import PeoplePage from "./feature/people/PeoplePage/PeoplePage";

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route path={toFilm()}>
          <FilmPage />
        </Route>
        <Route path={toPerson()}>
          <PersonPage />
        </Route>
        <Route path={toFilms()}>
          <FilmsPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route>
          <Redirect to={toFilms()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
