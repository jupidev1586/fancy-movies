import { useDispatch } from "react-redux";
import styles from './index.module.scss';

const MainCard = ({ data, cardStyle={} }) => {
  const { title, vote_average, poster_path, id } = data;

  const dispatch = useDispatch();

  const onHandleModal = () => {
    dispatch({ type: 'SET_MODAL_ON' });
    dispatch({ type: 'SET_MODAL_DATA', payload: data });
  }


  return (
    <div className={ styles.MainCard } style={ cardStyle } onClick={ onHandleModal } id={id}>
      <img className={ styles.img } src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title } />
      <div className={ styles.text }>
        <h3 style={{ fontSize: cardStyle.fontSize, lineHeight: cardStyle.lineHeight }}>{ title }</h3>
        <p>{ vote_average }</p>
      </div>
    </div>
  )
}

export default MainCard;