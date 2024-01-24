import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import Eyes from '../../Assets/visualizacao-black.svg/?react';

/* eslint-disable react/prop-types */
const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div
      className=' opacity-0 scale-90 animate-animationup m-auto rounded bg-white grid grid-cols-2 overflow-hidden max-sm:h-screen max-sm:grid-cols-1 max-sm:p-2'
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <div className=' rounded overflow-hidden w-[500px] max-sm:w-[100%] '>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className=' px-8 pt-8 max-sm:px-2 max-sm:pt-2'>
        <div>
          <p className='w-full flex items-center justify-between opacity-60 mb-4'>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className='flex gap-1 items-center justify-center'>
              <Eyes />
              {photo.acessos}
            </span>
          </p>
          <h1>
            <Link className=' text-4xl font-bold' to={`/foto/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>
          <ul className='flex gap-10 mt-4'>
            <li className=' font-bold text-lg'>| {photo.peso} kg</li>
            <li className=' font-bold text-lg'>
              |<span> {photo.idade} </span>
              {photo.idade <= 1 ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
