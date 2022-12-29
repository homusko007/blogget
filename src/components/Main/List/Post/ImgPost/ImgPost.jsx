import style from './ImgPost.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const ImgPost = ({thumbnail = notphoto, title}) => {
  console.log(thumbnail);
  const img = thumbnail.replace(/[^http]s?:\/\/[^\s]+]/, notphoto);
  return (
    <img className={style.img}
      src={img}
      alt={title} />
  );
};

ImgPost.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.any,
};
