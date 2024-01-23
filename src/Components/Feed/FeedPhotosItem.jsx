/* eslint-disable react/prop-types */
import './style.css';
const FeedPhotosItem = ({ photo }) => {
  return (
    <li className=' grid rounded overflow-hidden cursor-pointer even:col-start-2 even:col-end-4 even:row-span-2 max-sm:even:col-start-2 max-sm:even:col-end-2 max-sm:even:row-span-1'>
      <img
        src={photo.src}
        alt={photo.title}
        className=''
        style={{ gridArea: '1/1' }}
      />
      <span
        className=' svg text-transparent hover:bg-black/[.3] hover:text-white text-sm block justify-center items-center hover:flex'
        style={{
          gridArea: '1/1',
        }}
      >
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
