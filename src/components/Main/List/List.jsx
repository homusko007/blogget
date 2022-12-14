import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
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
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postsData) => (
        <Post key={postsData.id} postData={postsData} />
      ))}
    </ul>
  );
};
