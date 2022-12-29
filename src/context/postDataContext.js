import React from 'react';
import PropTypes from 'prop-types';
import {usePostData} from '../hooks/usePost';

export const postDataContext = React.createContext({});

export const PostDataContextProvider = ({children}) => {
  const [postsData] = usePostData();

  return (
    <postDataContext.Provider value={{postsData}}>
      {children}
    </postDataContext.Provider>
  );
};

PostDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
