import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {AuthContextProvider} from './context/authContext';
import {PostDataContextProvider} from './context/postDataContext';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <PostDataContextProvider>
        <Header />
        <Main />
      </PostDataContextProvider>
    </AuthContextProvider>
  </Provider>
);

export default App;
