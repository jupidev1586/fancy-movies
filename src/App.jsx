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
  
  return (
    <div className={styles.App} id="appTop">
      <Navbar />
      <MainInput input={input} setInput={setInput} />
      <TvSerieEntity cardData={ cardData }/>
      <h3 className={styles.darkBg}>POPULAR TV SERIES</h3>
      <SeriesSection setCardData={ setCardData }/>
      <MainSection />
      { 
        <MovieEntity movieID={input ? input : '13'} />
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
