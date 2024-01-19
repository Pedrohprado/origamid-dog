import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import HomePage from './Page/HomePage';
import Login from './Page/Login/Login';
import Footer from './Components/Footer';
import { UserStorage } from './Context/userContext';
import User from './Page/User/User';
import ProtectedRouter from './Components/Helper/ProtectedRouter';

const App = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login/*' element={<Login />} />
            <Route
              path='conta/*'
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
