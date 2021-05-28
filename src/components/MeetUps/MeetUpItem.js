import { useContext } from "react";
import Card from "../UI/Card";

import styles from "./MeetUpItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetUpItem = (props) => {
  const { id, title, image, address, description } = props;

  const favoritesCTX = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCTX.checkFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCTX.removeFavorite(id);
    } else {
      favoritesCTX.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  };

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetUpItem;
