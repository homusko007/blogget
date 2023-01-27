import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Preloader from '../../UI/Preloader';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useRef, useState, useEffect} from 'react';
import Comments from './Comments';
import FormComment from './FormComment';
import {useCommentsData} from '../../hooks/useCommentsData';
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const commentsData = useCommentsData(id);
  const {0: post, 1: comments, 2: status} = commentsData;

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const keyPress = (e) => {
      if (e.keyCode === 27) { // клавиша escape
        navigate(`/category/${page}`);
      }
    };
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, []);

  return ReactDOM.createPortal( // 1-й параметр, то что рендерим
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader />}
        {status === 'error' && 'Ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>
              <Markdown options={{ // чтобы ссылки открывались
                overrides: { // в новом окне
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {post.selftext}
              </Markdown>
            </div>


            <p className={style.author}>{post.author}</p>

            <button onClick={() => setIsTextareaOpen(true)}>
          Добавить комментарий
            </button>
            {isTextareaOpen &&
            <FormComment />}
            <Comments comments={comments}/>
            <button className={style.close}
              onClick={() => {
                navigate(`/category/${page}`);
              }}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'), // 2-й пар. куда рендерим
  );
};
