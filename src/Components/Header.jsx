import { Link } from 'react-router-dom';
import Dog from '../Assets/dogs.svg/?react';
import Login from '../Assets/usuario.svg/?react';
import React from 'react';
import { UserContext } from '../Context/userContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className=' h-16 w-full flex items-center justify-center shadow-md fixed z-10 bg-white top-0'>
      <nav className='  w-5/6 flex items-center justify-between'>
        <Link to='/' className='px-5 py-2' aria-label='Dogs | Home'>
          <Dog />
        </Link>
        {data !== null ? (
          <Link
            to='conta'
            className=' px-5 py-2 text-stone-800 font-medium transition-1 flex items-center justify-center gap-2'
          >
            {data.nome}
            <button onClick={userLogout}>sair</button>
            <Login className=' text-stone-800' />
          </Link>
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
