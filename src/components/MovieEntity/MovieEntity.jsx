import { useState, useEffect } from 'react';
import { GET } from '../../utils/api.js'; 

import styles from './index.module.scss';

const MovieEntity = ({ movieTitle, input }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GET("search", "movie", `&query=${movieTitle}&page=1`).then((data) => {
      if (data.results[0] && data.results[0].adult === false) {
        setMovieData(data.results[0]);
      } 
    });
  }, [movieTitle]);

  const {
    poster_path,
    original_title,
    genres,
    vote_average,
    tagline,
    title
  } = movieData;
  
  return (
    <div className={ styles.MovieEntity } id="movie-entity">
      <div className={ styles.info }>
        <div className={ styles.info__title }>
          <p>title</p>
          <h1>{ title }</h1>
        </div>
        <div className={ styles.info__bottom }>
          <p>rating</p>
          <p>{ vote_average || 'not found' }</p>
          <p>genre</p>
          <ul>
            {
              genres && genres
              .map(genres => {
                return <li key={genres.id}>{ genres.name }</li>
              })
            }
          </ul>
          <p className={ styles.tagline }>{ tagline }</p>
        </div>
      </div>
      <img className={ styles.poster } src={poster_path && `https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}/>
      <div className={ styles.book }>
        <button className={ styles.book__btn }>Book it!</button>
      </div>
    </div>
  )
}

export default MovieEntity;

