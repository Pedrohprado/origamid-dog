import React from 'react';
import LogoMarca from '../Assets/dogs.svg?react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className=' h-16 w-svw flex items-center justify-center shadow-md fixed z-10 bg-white top-0'>
      <nav className='  w-full px-2 flex items-center justify-between '>
        <Link to='/' className='px-5 py-2' aria-label='Dogs | Home'>
          {/* <img src='src\Assets\dogs.svg' alt='cachorro' /> */}
          <LogoMarca />
        </Link>
        {data !== null ? (
          <button className=' px-5 py-2 text-stone-800 font-medium transition-1 flex items-center justify-center gap-2'>
            {data.nome}
            <img src='../Assets/usuario.svg' alt='usuario' />
          </button>
        ) : (
          <Link
            to='login'
            className=' px-5 py-2 text-stone-800 font-medium transition-1 flex items-center justify-center gap-2'
          >
            Login | Criar
            <img src='src\Assets\usuario.svg' alt='usuario' />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
