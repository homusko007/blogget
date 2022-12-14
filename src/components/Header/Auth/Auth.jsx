import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';


export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
      <AuthIcon className={style.svg} width={30} height={30} />
    }
  </button>
);
// если пользователь авторизован, выводит пользователя,
// если не авторизован - выводит картинку

Auth.propTypes = {
  auth: PropTypes.bool,
};

