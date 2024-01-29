import { Route, Routes } from 'react-router-dom';

import UserHeader from './UserHeader';
import Feed from '../../Components/Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import React from 'react';
import { UserContext } from '../../Context/userContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <div className=' w-5/6 flex flex-col items-center justify-center pt-20'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </div>
  );
};

export default User;
