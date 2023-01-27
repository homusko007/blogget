import {URL_API} from '../../api/const';
import axios from 'axios';
import {postsSlice} from './postsSlice';
// import {createAsyncThunk} from '@reduxjs/toolkit';


export const postRequestAsync = (newPage) => (dispatch, getState) => {
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
};
