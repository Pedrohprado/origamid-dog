/* eslint-disable react/prop-types */
import React from 'react';
import { UserContext } from '../../Context/userContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to='/login' />;
  } else {
    return <></>;
  }
};

export default ProtectedRouter;
