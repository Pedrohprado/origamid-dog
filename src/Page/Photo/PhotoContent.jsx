import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import Eyes from '../../Assets/visualizacao-black.svg/?react';

/* eslint-disable react/prop-types */
const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div
      className=' h-[80%] w-[90%] flex mt-8 opacity-0 scale-90 animate-animationup rounded bg-white max-sm:h-[100%] max-sm:w-[80%] max-sm:flex-col max-sm:p-2'
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <div className='w-[100%] rounded overflow-hidden'>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className=' flex flex-col items-center justify-between w-[50%] px-8 py-8 max-sm:px-2 max-sm:py-2 max-sm:w-[100%] max-sm:h-[55%]'>
        <div className=' w-full'>
          <p className=' w-full flex items-center justify-between opacity-60 mb-4'>
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
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </div>
  );
};

export default PhotoContent;
