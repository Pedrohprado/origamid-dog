import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Postar foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estátistica');
        break;
      case '/conta':
        setTitle('Feed');
        break;
      default:
        setTitle(null);
        break;
    }
  }, [location]);
  return (
    <header className=' w-full flex items-center justify-between'>
      <h1 className=' text-3xl font-bold'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
