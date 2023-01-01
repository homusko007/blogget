import style from './FormComment.module.css';
import {useEffect, useRef, useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {Text} from '../../../UI/Text';


export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(textareaRef.current.value);
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);


  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={style.textarea} ref={textareaRef} />

      <button className={style.btn}>Отправить</button>
    </form>
  );
};

