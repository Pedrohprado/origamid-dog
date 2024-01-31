import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

import Perfil from '../../Assets/feed.svg?react';
import Estatic from '../../Assets/estatisticas.svg?react';
import Add from '../../Assets/adicionar.svg?react';
import Exit from '../../Assets/sair.svg?react';

import './UserActiveLink.css';
import useMedia from '../../Hooks/useMedia';

import { HiOutlineMenu } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate;
  const mobile = useMedia('(max-width: 40rem)');
  const location = useLocation();

  React.useEffect(() => {
    if (mobile) setMobileMenu(false);
  }, [location, mobile]);

  React.useEffect(() => {
    if (!mobile) {
      setMobileMenu(true);
    }
  }, [mobile]);

  function userExit() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          className={`z-2 h-10 w-10 flex items-center justify-center bg-slate-200 rounded p-1 transform transition-transform duration-300 ${
            mobileMenu ? 'rotate-180' : ''
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <IoCloseSharp size={20} fill='#303030' />
          ) : (
            <HiOutlineMenu size={20} fill='#303030' />
          )}
        </button>
      )}
      <nav
        className={
          mobile
            ? ` z-40 flex flex-col absolute top-32 right-9  bg-white rounded w-56 opacity-0 translate-x-20 ${
                mobileMenu ? 'animate-animationleft' : ''
              }`
            : 'flex items-center justify-center gap-5'
        }
      >
        {mobileMenu ? (
          <>
            <NavLink
              to='/conta'
              className={
                mobile
                  ? 'flex items-center justify-start bg-slate-200 w-full px-2 py-1 gap-2'
                  : 'flex items-center justify-center gap-1 bg-slate-200 rounded p-1  hover:bg-white '
              }
              end
            >
              <Perfil />

              {mobile && 'Minhas fotos'}
            </NavLink>
            <NavLink
              to='/conta/estatisticas'
              className={
                mobile
                  ? 'flex items-center justify-start bg-slate-200 w-full px-2 py-1 gap-2'
                  : 'flex items-center justify-center gap-1 bg-slate-200 rounded p-1  hover:bg-white '
              }
            >
              <Estatic />
              {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink
              to='/conta/postar'
              className={
                mobile
                  ? 'flex items-center justify-start bg-slate-200 w-full px-2 py-1 gap-2'
                  : 'flex items-center justify-center gap-1 bg-slate-200 rounded p-1  hover:bg-white '
              }
            >
              <Add />

              {mobile && 'Adicionar fotos'}
            </NavLink>
            <button
              onClick={userExit}
              className={
                mobile
                  ? 'flex items-center justify-start bg-slate-200 w-full px-2 py-1 gap-2 '
                  : 'flex items-center justify-center gap-1 bg-slate-200 rounded p-1  hover:bg-white '
              }
            >
              <Exit />
              {mobile && 'sair'}
            </button>
          </>
        ) : (
          ''
        )}
      </nav>
    </>
  );
};

export default UserHeaderNav;
