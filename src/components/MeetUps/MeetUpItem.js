import Card from "../UI/Card";
import styles from "./MeetUpItem.module.css";

const MeetUpItem = (props) => {
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
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetUpItem;
