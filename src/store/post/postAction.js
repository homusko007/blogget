import {URL_API} from '../../api/const';
import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;

  dispatch(postRequest());

  axios(`${URL_API}/best?limit=20`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({
        data: {
          data: {
            children
          },
        }
      }) => {
        const data = children.map((item) => item.data);
        dispatch(postRequestSuccess(data));
      })
    .catch((err) => {
      console.error(err);
      dispatch(postRequestError(err.message));
    });
};
