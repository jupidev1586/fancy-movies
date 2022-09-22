import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

const Navbar = () => {
  return (
    <div className={ styles.Navbar }>
      <ul>
        <li>
          <a href="#movie-entity">
            <FontAwesomeIcon icon="fa-duotone fa-film" /> Movie section 
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;