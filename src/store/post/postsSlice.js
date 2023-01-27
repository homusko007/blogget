import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postRequest: (state) => {
      state.loading = true;
      state.error = '';
      state.page = '';
    },
    postRequestSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload.children;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, ...action.payload.children];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postRequestError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    changePage: (state, action) => {
      state.after = '';
      state.isLast = false;
      state.page = action.page;
    },
  },
});

export default postsSlice.reducer;
