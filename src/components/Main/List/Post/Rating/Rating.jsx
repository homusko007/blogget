import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rating = ({ups}) => {
  console.log(1);
  return (<div className={style.rating}>
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
};

Rating.propTypes = {
  ups: PropTypes.any,
};

/* font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: #8f8f8f;*/
