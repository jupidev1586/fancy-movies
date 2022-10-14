import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss';

const MainInput = ({ input, setInput, onSubmit, onHandleSubmit, setMovieTitle, isOn }) => {

  const [isInputVisible, setInputVisibility] = useState(false);
  
  const [isData, setIsData] = useState('');
  

  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 700)
      ? setInputVisibility(true)
      : setInputVisibility(false))
  }, []);

  useEffect(() => {
    if (input) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ad6baf64ad75ee341315fda666f2d48e&language=en-US&query=${input}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((data) => {
        setIsData(data);
      });
    }
  }, [input]);


  const onHandleInput = (e) => setInput(e.target.value);
 
  return (
    <div className={styles.MainInput}>
      <form className={styles.form} onSubmit={onSubmit}>
        {
          isInputVisible && (
            
            <>
              <input className={isOn ? styles.search : ''} value={input} onChange={onHandleInput} type="text" placeholder="Search Movie by name.."/>
              
              <button type="button" onClick={onHandleSubmit}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
              
            </>

          )
        }
        <div className={styles.listAutocomplete}>
          {input.length > 1 &&
            isData.results &&
            isData.results.length > 0 && (
              
              <ul>
                {
                  isData.results.map((movie) => {
                    return (
                      <li
                        key={movie.id}
                        onClick={() => {
                          setMovieTitle(movie.title);
                          setInput("");
                        }}
                      >
                        {movie.title}
                      </li>
                    );
                  })
                }
              </ul>
                  
            ) 
          }
        </div>
      </form>
      
      
    </div>
  )
}

export default MainInput;