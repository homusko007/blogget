// import {takeLatest, put, select, call} from 'redux-saga/effects';
import {searchRequestSuccess, SEARCH_REQUEST} from './searchAction';
import {takeLatest, select, put} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield axios(`${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    yield put(searchRequestSuccess(request.data.data));
  } catch (e) {
    yield put(searchRequestSuccess(e));
  }
}


export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}


/* const fetchSearch = async (action, token) => {
  const request = await axios(`${URL_API}/search?q=${action.search}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return request.data;
};

function* workerSearch(action) {
  const token = yield select(state => state.tokenReducer.token);
  const {data} = yield call(fetchSearch, action.search, token);
  yield put(searchRequestSuccess(data)); // заменяет dispatch
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, workerSearch);
}*/
