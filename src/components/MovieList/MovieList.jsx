import { memo } from 'react';
import MainCard from '../MainCard';
import styles from './index.module.scss';

const MovieList = ({ data, className }) => {
  
  return (
    <div className={`${styles.MovieList} ${className}`}>
      {
        data.map((item, index) => <MainCard 
          modalData={item}
          data={ item } 
          cardStyle={{ width: '420px', height: '500px', fontSize: '16px', lineHeight: '16px' }} 
          key={index}
        />)
      }
    </div>
  )
  
}

export default memo(MovieList);