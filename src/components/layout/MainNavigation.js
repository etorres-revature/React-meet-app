import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

// console.log(styles);

const MainNavigation = () => {
  const favoritesCTX = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              FAVORITES
              <span className={styles.badge}>
                {favoritesCTX.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
