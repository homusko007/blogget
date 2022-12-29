import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostDataContextProvider} from './context/postDataContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostDataContextProvider>
          <Header />
          <Main />
        </PostDataContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
