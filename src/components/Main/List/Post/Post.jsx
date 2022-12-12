import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import Content from './Content';
import Rating from './Rating';
import BtnDel from './BtnDel';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Content title={title} author={author}/>
      <Rating ups={ups} />
      <BtnDel />
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
