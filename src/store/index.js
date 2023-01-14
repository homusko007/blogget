import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleware} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import {postReducer} from './post/postReducer';
import {commentsDataReducer} from './comment/commentsDataReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postReducer,
  commentsDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
