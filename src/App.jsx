import { useState, useEffect } from 'react';
import SeriesSection from './components/SeriesSection';
import TvSerieEntity from './components/TvSerieEntity';
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import TornaSu from './components/TornaSu/'
import MovieEntity from './components/MovieEntity';
import MainSection from './components/MainSection';
import MainInput from './components/MainInput';
import { useSelector, useDispatch } from "react-redux";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import styles from './App.module.scss';

library.add(fas);




function App() {

  const [input, setInput] = useState('');

  const [isInputVisible, setInputVisibility] = useState(false);

  const [cardData, setCardData] = useState({});

  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 700)
      ? setInputVisibility(true)
      : setInputVisibility(false))
  }, []);

  const modalData = useSelector(state => state.modalData)
  const isModalVisible = useSelector(state => state.isModalVisible)
  const dispatch = useDispatch();
  
  const [isOn, setIsOn] = useState(false);

  const [movieTitle, setMovieTitle] = useState("Forrest Gump");

  const onSubmit = (e) => {
    e.preventDefault();
    setMovieTitle(input);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    !isOn ? setIsOn(true) : setIsOn(false);
    setInput("");
    // setMovieTitle(input);
  }

  return (
    <div className={styles.App} id="appTop">
      <Navbar />
      <MainInput input={input} setInput={setInput} onSubmit={onSubmit} setMovieTitle={setMovieTitle} onHandleSubmit={onHandleSubmit} isOn={isOn} />
      
      
      <SeriesSection setCardData={ setCardData }/>
      <h3 className={styles.darkBg}>POPULAR TV SERIES</h3>
      <TvSerieEntity cardData={ cardData }/>
      <MainSection />
      { 
        <MovieEntity movieTitle={movieTitle} />
      }
      
      {
        isInputVisible && <TornaSu />
      }
      { isModalVisible && <>
        <div onClick={() => dispatch({ type: 'SET_MODAL_OFF' })} className={styles.overlay}></div>
        <Modal data={modalData} />
      </>
      }
      
    </div>
  );
}

export default App;
