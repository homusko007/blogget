import style from './List.module.css';
import Post from './Post';
import {usePostData} from '../../../hooks/usePost';
import ClipLoader from 'react-spinners/ClipLoader';

export const List = () => {
  const [postsData, loading] = usePostData();

  return (
    <ul className={style.list}>
      {loading ? (
        <ClipLoader color='#cc6633' size={60}/>
    ) : (
      Array.from(postsData).map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))
      )}
    </ul>
  );
};
