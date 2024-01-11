import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import HomePage from './Page/HomePage';
import Login from './Page/Login/Login';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login/*' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
