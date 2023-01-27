import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {commentsDataRequestAsync} from '../store/comments/commentsDataAction';

export const useCommentsData = (id) => {
  const comments = useSelector(state => state.commentsDataReducer.comments);
  const post = useSelector(state => state.commentsDataReducer.post);
  const status = useSelector(state => state.commentsDataReducer.status);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  return [post, comments, status];
};
