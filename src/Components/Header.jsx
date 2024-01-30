import { Link } from 'react-router-dom';
import Logo from '../Assets/dogs.svg/?react';
import Login from '../Assets/usuario.svg/?react';
import React from 'react';
import { UserContext } from '../Context/userContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className=' h-16 w-svw flex items-center justify-center shadow-md fixed z-10 bg-white top-0'>
      <nav className='  w-full px-2 flex items-center justify-between '>
        <Link to='/' className='px-5 py-2' aria-label='Dogs | Home'>
          <Logo className=' text-stone-800' />
        </Link>
        {data !== null ? (
          <button className=' px-5 py-2 text-stone-800 font-medium transition-1 flex items-center justify-center gap-2'>
            {data.nome}
            <Login className=' text-stone-800' />
          </button>
        ) : (
          <Link
            to='login'
            className=' px-5 py-2 text-stone-800 font-medium transition-1 flex items-center justify-center gap-2'
          >
            Login | Criar
            <Login className=' text-stone-800' />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
