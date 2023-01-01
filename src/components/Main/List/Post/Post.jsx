import style from './Post.module.css';
import PropTypes from 'prop-types';
import ImgPost from './ImgPost';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import {ReactComponent as DelIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created: date,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <ImgPost thumbnail={thumbnail} title={title}/>
      <Content title={title} author={author} markdown={markdown} id={id}/>
      <Rating ups={ups} />
      <Date date={date} />
      <button className={style.delete}>
        <DelIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.any,
};
