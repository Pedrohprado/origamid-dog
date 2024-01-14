import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../Context/userContext';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to='/conta' />;
  return (
    <div className=' pt-16 w-5/6 my-10'>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='lost' element={<LoginPasswordLost />} />
        <Route path='reset' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
