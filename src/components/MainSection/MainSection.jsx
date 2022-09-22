import { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import MovieList from '../MovieList';
import { GET } from '../../utils/api';

import styles from './index.module.scss';

const MainSection = ({ modalData }) => {
  const [movieLists, setMovieLists] = useState({});
  
  useEffect(() => {
    GET('movie', 'popular', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, popular: data.results })));

    GET('movie', 'top_rated', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, topRated: data.results })));
      
    GET('movie', 'upcoming', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, upcoming: data.results })));
  }, []);
 
  return (
    <div className={ styles.MainSection } id="movie-list">
      <div className="d-flex">
        <h2 className="mt-0 most-pop">Most Popular</h2>
        { movieLists.popular && <MainCard data={ movieLists.popular[0] } /> }
      </div>
      
      <div className="d-flex">
        <h2 className="mt-0">Top Rated:</h2>
        { movieLists.topRated && <MovieList data={movieLists.topRated} className="topRated" /> }
        <h2>Upcoming:</h2>
        { movieLists.upcoming && <MovieList data={movieLists.upcoming} className="upcoming" /> }
      </div>
    </div>
  )
}

export default MainSection;