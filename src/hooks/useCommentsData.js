import {useContext} from 'react';
import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    const arr = [];

    fetch(`${URL_API}/comments?${id}`, {
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
      .then(({data}) => data.children)
      .then(data => {
        data.forEach(item => {
          arr.push(item.data);
        });
        setCommentsData(arr);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [commentsData];
};

// setCommentsData(data)
