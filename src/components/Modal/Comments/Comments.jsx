import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import Date from '../../Main/List/Post/Date';

export const Comments = ({comments}) => {
  // const {body, author, id, created: date} = comments;

  console.log(comments);
  return (
    <ul className={style.list}>
      {comments.length !== 0 ? (
      Array.from(comments).map((el) => (
        <li className={style.item} key={el.id}>
          <Text As='h3'
            className={style.author}
            size={18} tsize={22}>
            {el.author}
          </Text>
          <Text As='p'
            className={style.comment}
            size={14} tsize={18}>
            {el.body}
          </Text>
          <Date date={el.created} />
        </li>
      ))
    ) : (
      'Нет комментариев'
    )}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.any,
};
