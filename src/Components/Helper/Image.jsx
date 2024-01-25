/* eslint-disable react/prop-types */
import React from 'react';
import './styleimg.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div style={{ gridArea: '1/1' }} className='wrapper'>
      {skeleton && <div className='skeleton'></div>}
      <img onLoad={handleLoad} className='img' alt={alt} {...props} />
    </div>
  );
};

export default Image;
