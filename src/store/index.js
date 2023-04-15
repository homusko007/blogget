import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comments/commentReducer';
import postsReducer from './post/postsSlice';
import commentsDataReducer from './comments/commentsSlice';
import {searchReducer} from './search/searchReducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postsReducer,
    commentsDataReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
