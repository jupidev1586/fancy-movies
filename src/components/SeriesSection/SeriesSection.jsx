import { useState, useEffect } from 'react';
import TvSeriesList from '../TvSeriesList'
import { GETSERIES } from '../../utils/api.js';
import styles from './index.module.scss';

const SeriesSection = ({ setCardData }) => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    GETSERIES('tv', 'popular', '&language=en-US&page=1')
    .then(data => setSeriesData(data));
  }, []);

  return (
    <div className={styles.SeriesSection}>
      <TvSeriesList seriesList={ seriesData.results } setCardData={ setCardData }/>
    </div>
  )
}

export default SeriesSection;