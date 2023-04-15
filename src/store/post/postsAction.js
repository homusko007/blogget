import {URL_API} from '../../api/const';
import axios from 'axios';
// import {postsSlice} from './postsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

/* export const postRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postReducer.page;
  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().postReducer.after;
  const loading = getState().postReducer.loading;
  const isLast = getState().postReducer.isLast; // after последний

  if (!token || loading || isLast) return;

  dispatch(postsSlice.actions.postRequest());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        dispatch(postsSlice.actions.postRequestSuccessAfter(data.data));
      } else {
        dispatch(postsSlice.actions.postRequestSuccess(data.data));
      }
    })
    .catch((err) => {
      dispatch(postsSlice.actions.postRequestError(err));
    });
};*/

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().postReducer.page;
    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast; // after последний
    let num = getState().postsReducer.num;

    if (!token || isLast) return;

    return axios(`${URL_API}/${page}?limit=5&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
        const posts = data.data.children;
        const after = data.data.after;
        num += 1;
        return {posts, after, num, page};
      })
      .catch((error) => ({error: error.toString()}));
  }
);
