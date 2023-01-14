import {URL_API} from '../../api/const';
import axios from 'axios';

export const COMMENTS_DATA_REQUEST = 'COMMENTS_DATA_REQUEST';
export const COMMENTS_DATA_REQUEST_SUCCESS = 'COMMENTS_DATA_REQUEST_SUCCESS';
export const COMMENTS_DATA_REQUEST_ERROR = 'COMMENTS_DATA_REQUEST_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTS_DATA_REQUEST,
});

export const commentsDataRequestSuccess = (comments) => ({
  type: COMMENTS_DATA_REQUEST_SUCCESS,
  comments,
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTS_DATA_REQUEST_ERROR,
  error,
});

export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  dispatch(commentsDataRequest());

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
        dispatch(commentsDataRequestSuccess({post, comments}));
      })
    .catch((err) => {
      console.error(err);
      dispatch(commentsDataRequestError(err.message));
    });
};
