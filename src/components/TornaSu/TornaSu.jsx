import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const TornaSu = ({ input, setInput }) => {

  return (
    <>
      <div className="tornasu">
        <a href="#appTop">
          <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </a>
      </div>
    </>
  )
}

export default TornaSu;