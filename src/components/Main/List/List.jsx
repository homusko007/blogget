import style from './List.module.css';
import Post from './Post';
import {useContext} from 'react';
import {postDataContext} from '../../../context/postDataContext';

export const List = () => {
  /* const postsData = [
    {
      thimbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-02-24T09:45:00.000Z',
      id: '528',
    },
    {
      thimbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2022-02-31T00:00:00.000Z',
      id: '689',
    },
    {
      thimbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '456',
    },
    {
      thimbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2022-03-10T08:00:00.000Z',
      id: '789',
    }
  ];*/
  const {postsData} = useContext(postDataContext);

  return (
    <ul className={style.list}>
      {Array.from(postsData).map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
