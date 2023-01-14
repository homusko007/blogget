import {COMMENTS_DATA_REQUEST, COMMENTS_DATA_REQUEST_ERROR,
  COMMENTS_DATA_REQUEST_SUCCESS} from './commentsDataAction';

const initialState = {
  comments: {},
  error: '',
  status: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case COMMENTS_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        status: 'loaded',
        error: '',
      };
    case COMMENTS_DATA_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };


    default:
      return state;
  }
};


