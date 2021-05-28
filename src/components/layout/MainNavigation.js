import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

console.log(styles);

const MainNavigation = () => {
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
            <Link to="/favorites">FAVORITES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
