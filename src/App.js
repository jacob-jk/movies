import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import FilmsPage from "./feature/FilmsPage/FilmsPage";
import PeoplePage from "./feature/PeoplePage/PeoplePage";
import Navigation from "./feature/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route path="/films">
          <FilmsPage />
        </Route>
        <Route path="/people">
          <PeoplePage />
        </Route>
        <Route>
          <Redirect to="/films" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
