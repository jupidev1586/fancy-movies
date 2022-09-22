
import { memo } from 'react';
import styles from './index.module.scss';


const Modal = ({ data }) => {
  const { poster_path, original_title, overview } = data;

  console.log('data ====>', data)

  return (
    <div className={ styles.Modal }>
      <img className={ styles.img } src={`${'https://image.tmdb.org/t/p/original'}${poster_path}`} alt={original_title} />
      <h2 className={ styles.header }>{original_title}</h2>
      <p className={ styles.desc }>{overview}</p>
    </div>
  )
}

export default memo(Modal);