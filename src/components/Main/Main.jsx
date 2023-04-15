import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import StartPage from './StartPage';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import ErrorPage from './ErrorPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<StartPage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Layout>
  </main>
);
