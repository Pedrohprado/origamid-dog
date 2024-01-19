import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../Context/userContext';
import './Loginc.css';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to='/conta' />;
  return (
    <section className='pt-20 w-5/6 grid grid-cols-2 min-h-screen gap-8 before:block before:bg-[url(./Assets/login.jpg)] before:bg-no-repeat before:bg-center before:bg-cover login'>
      <div className=' max-w-lg form'>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='lost' element={<LoginPasswordLost />} />
          <Route path='reset' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
