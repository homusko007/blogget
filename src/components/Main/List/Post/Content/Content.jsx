import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../../components/Modal';

export const Content = ({title, author, markdown, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={14}
          tsize={22}
          fontWeight='bold'
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text
        As='a' size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
      {isModalOpen &&
      <Modal markdown={markdown} title={title} author={author} id={id}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
