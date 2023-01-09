import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from '../api/const';
import {deleteToken} from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => { // ругается что не в camel case
        const img = iconImg.replace(/\?.*$/, ''); // обрезаем ненужное у img
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => {
    setAuth({});
  };

  return [auth, clearAuth];
};
