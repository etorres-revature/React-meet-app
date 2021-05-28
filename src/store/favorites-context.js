import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (meetupID) => {},
  checkFavorite: (meetupID) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favorite) => {
    setUserFavorites((prevState) => {
      return prevState.concat(favorite);
    });
  };

  const removeFavoriteHandler = (meetupID) => {
    setUserFavorites((prevState) => {
      return prevState.filter((meetup) => {
        return meetup.id !== meetupID;
      });
    });
  };

  const itemsIsFavoriteHandler = (meetupID) => {
    return userFavorites.some((meetup) => {
      return meetup.id === meetupID;
    });
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    checkFavorite: itemsIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
