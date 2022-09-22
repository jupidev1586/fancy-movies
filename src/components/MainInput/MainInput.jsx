import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

const MainInput = ({ input, setInput }) => {
  // const selectRef = useRef(null);

  const [isInputVisible, setInputVisibility] = useState(false);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 700)
      ? setInputVisibility(true)
      : setInputVisibility(false))
  }, []);


  const onHandleSubmit = (e) => {
    e.preventDefault();
    !isOn ? setIsOn(true) : setIsOn(false);
    input === e.target.value && setInput(e.target.value);
  }

  const onHandleInput = (e) => setInput(e.target.value);

  return (
    <form className={styles.MainInput} onSubmit={onHandleSubmit}>
       {
        isInputVisible && (
          
          <>
            <input className={isOn ? styles.search : ''} value={input} onChange={onHandleInput} type="text" />
            
            <button type="submit">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </>
          
        )
      }
    </form>
  )
}

export default MainInput;