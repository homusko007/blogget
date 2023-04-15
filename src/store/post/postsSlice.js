import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  num: 0,
};

/* export const postsSlice = createSlice({
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
      state.posts = state.posts.concat(action.payload.children);
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

export default postsSlice.reducer;*/

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.after = '';
      state.isLast = false;
      state.page = action.payload;
      state.posts = [];
      state.num = 0;
    }
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.posts = state.posts.concat(action.payload.posts);
      state.num = action.payload.num;
      state.page = action.payload.page;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;

