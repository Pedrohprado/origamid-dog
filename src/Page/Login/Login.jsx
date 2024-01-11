import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
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
