// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
				<img src="/logo.png" alt="" height="40"/>
			</div>
      <ul>
        <li>
          <a href="#series-list">Series</a>
        </li>
        <li>
          <a href="#movie-list">Movies</a>
        </li>
        <li>
          <a href="#movie-entity">Search Movie</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
