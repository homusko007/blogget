import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

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
