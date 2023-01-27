import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsync} from './commentsDataAction';


const initialState = {
  comments: [],
  error: '',
  status: '',
  post: {},
};


export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsDataRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.comments = action.payload.comments;
      state.post = action.payload.post;
      state.status = 'loaded';
      state.error = '';
    },
    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  }
});

export default commentsSlice.reducer;
