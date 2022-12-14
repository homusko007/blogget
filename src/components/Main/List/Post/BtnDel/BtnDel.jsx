import style from './BtnDel.module.css';
import {ReactComponent as DelIcon} from '../img/delete.svg';

export const BtnDel = () => (
  <button className={style.delete}>
    <DelIcon />
  </button>
);
