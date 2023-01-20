import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/post/postAction';
import {useParams, Outlet} from 'react-router-dom';

export const List = () => {
  const postsData = useSelector(state => state.postReducer.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  console.log(page);

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {Array.from(postsData).map(({data}) => (
          <Post key={data.id} postData={data} />
        ))}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};
