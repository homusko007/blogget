import style from './ImgPost.module.css';
import notphoto from '../img/notphoto.jpg';
import PropTypes from 'prop-types';

export const ImgPost = ({thumbnail, title}) => {
  const img = thumbnail.match(/https?/);

  return (
    <img className={style.img}
      src={img ? (thumbnail) : (notphoto)}
      alt={title} />
  );
};

ImgPost.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
