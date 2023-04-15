import style from './List.module.css';
import Post from './Post';
import Preloader from '../../../UI/Preloader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/post/postsAction';
import {useParams, Outlet} from 'react-router-dom';
import {postsSlice} from '../../../store/post/postsSlice';

export const List = () => {
  const postsData = useSelector(state => state.postsReducer.posts);
  const endList = useRef(null);
  const loading = useSelector(state => state.postsReducer.loading);
  const num = useSelector(state => state.postsReducer.num);
  const isLast = useSelector(state => state.postsReducer.isLast);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (num < 3) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync(page));
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
    }
  }, [endList.current]);

  return (
    <>
      {num < 1 && loading && <Preloader />}
      <ul className={style.list}>
        {postsData.map(({data}) => (
          <Post key={data.id} postData={data} />
        ))}
        {loading && <Preloader />}
        {num <= 2 ?
          <li ref={endList} className={style.end}/> : !isLast ? (
            <div className={style.more}>
              <button className={style.btn} onClick={() => {
                dispatch(postsRequestAsync(page));
              }}>Загрузить еще</button>
            </div>
        ) : '' }
      </ul>
      <Outlet />
    </>
  );
};
