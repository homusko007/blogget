import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const usePostData = () => {
  const postsData = useSelector(state => state.postReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.postReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [postsData, loading];
};
