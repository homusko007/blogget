import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {commentsDataRequestAsync} from '../store/comment/commentsDataAction';
// import {URL_API} from '../api/const';
// import axios from 'axios';

/* export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState([]);
  const token = useSelector(state => state.tokenReducer.token);


  useEffect(() => {
    if (!token) return;


    axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{data: post}],
              },
            },
            {
              data: {children},
            },
          ],
        }) => {
          const comments = children.map((item) => item.data);
          console.log({post, comments});
          setCommentsData({post, comments});
        })
      .catch((err) =>
        console.error(err));
  }, [token]);

  return [commentsData], status;
};*/


export const useCommentsData = (id) => {
  const commentsData = useSelector(state => state.commentsDataReducer.comments);
  const status = useSelector(state => state.commentsDataReducer.status);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  return [commentsData, status];
};
