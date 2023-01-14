import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {Text} from '../../../UI/Text';
import {urlAuth} from '../../../api/auth';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/token/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import Authloader from './Authloader';

export const Auth = () => {
  const [logout, setLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getLogout = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Authloader />
        ) :
          auth.name ? ( // пустой {} тоже выводит true
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
