import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/token/tokenReducer';
import {getToken} from './api/token';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }
      />
    </Routes>
  );
};

export default App;
