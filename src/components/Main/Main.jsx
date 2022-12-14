import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {assighId} from '../../utils/generateRandomId';
import {useState} from 'react';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assighId); // перебирает каждый элем и вызывает ф-цию по генерации ID

export const Main = () => {
  const [list, setList] = useState(LIST);

  const addItem = () => {
    // setList(list.concat(assighId({value: 'Новый пост'}))); // 1-й способ
    setList([...list, assighId({value: 'Новый пост'})]); // 2-й способ
  };
  return (
    <main className={style.main}>
      <Layout>
        <Tabs list={list} setList={setList} addItem={addItem}/>
        <List />
      </Layout>
    </main>
  );
};
