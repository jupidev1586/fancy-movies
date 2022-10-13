import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GET } from "../../utils/api";
import styles from './index.module.scss';

const MainInput = ({ input, setInput, onSubmit, setMovieTitle }) => {
  // const selectRef = useRef(null);

  const [isInputVisible, setInputVisibility] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isData, setIsData] = useState('');
  

  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 700)
      ? setInputVisibility(true)
      : setInputVisibility(false))
  }, []);

  useEffect(() => {
    if (input) {
      GET(
        "search",
        "movie",
        `&language=en-US`,
        `&query=${input}&page=1`
      ).then((data) => {
        setIsData(data);
        console.log('data===>', data);
        console.log('isData===>', isData)
      });
    }
  }, [input]);

  

  const onHandleSubmit = (e) => {
    e.preventDefault();
    !isOn ? setIsOn(true) : setIsOn(false);
    setInput("");
    console.log('isData', isData)
    // input === e.target.value && setInput(e.target.value);
  }

  const onHandleInput = (e) => setInput(e.target.value);

  

  return (
    <form className={styles.MainInput} onSubmit={onSubmit}>
       {
        isInputVisible && (
          
          <>
            <input className={isOn ? styles.search : ''} value={input} onChange={onHandleInput} type="text" />
            
            <button type="button" onClick={onHandleSubmit}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>

            {/* {input.length > 1 &&
              isData.results &&
              isData.results.length > 0 ? (
              <div className={``}>
                <ul>
                  {isData.results.map((movie) => {
                    return (
                      <li
                        key={movie.id}
                        onClick={() => {
                          setMovieTitle(movie.title);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {movie.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className={``}>
                <p>Non ci sono risultati..</p>
              </div>
            )} */}

          </>
          
        )
      }
    </form>
  )
}

export default MainInput;