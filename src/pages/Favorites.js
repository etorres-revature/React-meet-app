import { useContext } from "react";
import MeetUpList from "../components/MeetUps/MeetUpList";

import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCTX = useContext(FavoritesContext);

  let content;

  if (favoritesCTX.totalFavorites === 0) {
    content = <p>You have not added any favortie meet ups.</p>;
  } else {
    <MeetUpList meetups={favoritesCTX.favorites} />;
  }

  return (
    <section>
      <h1>Favorite Meet Ups</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
