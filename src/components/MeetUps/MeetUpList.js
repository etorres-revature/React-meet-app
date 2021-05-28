import MeetUpItem from "./MeetUpItem";

import styles from "./MeetUpList.module.css";

const MeetUpList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetUpList;
