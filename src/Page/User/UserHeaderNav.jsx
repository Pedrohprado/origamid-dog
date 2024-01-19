import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

import MyPhotos from '../../Assets/feed.svg/?react';
import Statistics from '../../Assets/estatisticas.svg/?react';
import AddPhoto from '../../Assets/adicionar.svg/?react';
import Exit from '../../Assets/sair.svg/?react';

import './UserActiveLInk.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate;

  function userExit() {
    userLogout();
    navigate('/login');
  }
  return (
    <nav className='flex items-center justify-center gap-5 '>
      <NavLink
        to='/conta'
        className='flex items-center justify-center gap-1 bg-slate-200 rounded p-1  hover:bg-white '
        end
      >
        {mobile && 'Minhas fotos'}
        <MyPhotos />
      </NavLink>
      <NavLink
        to='/conta/estatisticas'
        className='flex items-center justify-center gap-1 bg-slate-200 rounded p-1 hover:bg-white '
      >
        {mobile && 'Estatísticas'}
        <Statistics />
      </NavLink>
      <NavLink
        to='/conta/postar'
        className='flex items-center justify-center gap-1 bg-slate-200 rounded p-1 hover:bg-white '
      >
        {mobile && 'Adicionar fotos'}
        <AddPhoto />
      </NavLink>
      <button
        onClick={userExit}
        className=' flex items-center justify-center gap-1 bg-slate-200 rounded p-1 hover:bg-white '
      >
        {mobile && 'sair'}
        <Exit />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
