import style from './Rating.module.css';
import {Text} from '../../../../../UI/Text';
import PropTypes from 'prop-types';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} />
    <Text As='p'
      fontWeight='bold'
      color='grey99'
      size={12}
      tsize={16}
      className={style.ups}>{ups}</Text>
    <button className={style.down} />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
