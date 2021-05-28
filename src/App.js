import { Route } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Route exact path="/">
        <AllMeetUpsPage />
      </Route>
      <Route exact path="/new-meetup">
        <NewMeetUpsPage />
      </Route>
      <Route exact path="/favorites">
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
