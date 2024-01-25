import React from 'react';
import Send from '../../Assets/enviar.svg/?react';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');
  return (
    <form className='flex items-center justify-between w-full'>
      <textarea
        className=' border'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button>
        <Send />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
