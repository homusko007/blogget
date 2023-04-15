import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield watchSearch();
}
