import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import {ReactComponent as LoaderIcon} from './img/loader.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import Comments from './Comments';
import FormComment from './FormComment';
import {useCommentsData} from '../../hooks/useCommentsData';
// import {commentDataContext} from '../../context/commentsDataContext';

export const Modal = ({title, author, markdown, id, closeModal}) => {
  const overlayRef = useRef(null);
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [commentsData] = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
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
        closeModal();
      }
    };
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, []);


  return ReactDOM.createPortal( // 1-й параметр, то что рендерим
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

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
            {markdown}
          </Markdown>
        </div>

        <p className={style.author}>{author}</p>

        <button onClick={() => setIsTextareaOpen(true)}>
          Добавить комментарий
        </button>
        {isTextareaOpen &&
        <FormComment />}
        {commentsData.length !== 0 ? (
        <Comments comments={commentsData} />
        ) : (
        <LoaderIcon />
        )
        }
        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'), // 2-й пар. куда рендерим
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
