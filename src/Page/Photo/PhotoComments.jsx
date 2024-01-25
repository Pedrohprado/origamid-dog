/* eslint-disable react/prop-types */
import { UserContext } from '../../Context/userContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import React from 'react';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  return (
    <div className=' flex items-center justify-between'>
      {login && <PhotoCommentsForm id={props.id} />}
    </div>
  );
};

export default PhotoComments;
