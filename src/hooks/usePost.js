/* import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const usePostData = () => {
  const postsData = useSelector(state => state.postReducer.posts);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [postsData];
};*/
