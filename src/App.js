import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
