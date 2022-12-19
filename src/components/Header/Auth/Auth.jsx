import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  const [logout, setLogout] = useState(false);

  const getLogout = () => {
    clearAuth();
    delToken();
  };

  return (
    <div className={style.container}>
      {auth.name ? ( // пустой {} тоже выводит true
      <>
        <button className={style.btn} onClick={() => setLogout(!logout)}>
          <img className={style.img} src={auth.img}
            title={auth.name} alt={`Аватар ${auth.name}`} />
          <Text>{auth.name}</Text>
        </button>
        {logout && (
          <button className={style.logout}
            onClick={getLogout}>
          выйти
          </button>)}
      </>
      ) : (
      <Text className={style.authLink} As='a'
        href={urlAuth}> {/* ссылка на регистрацию*/}
        <LoginIcon className={style.svg} />
      </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
