import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
