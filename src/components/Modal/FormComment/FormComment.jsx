import style from './FormComment.module.css';
import {useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {Text} from '../../../UI/Text';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const {auth} = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };


  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={style.textarea}
        value={value}
        onChange={handleChange} />

      <button className={style.btn}>Отправить</button>
    </form>
  );
};

