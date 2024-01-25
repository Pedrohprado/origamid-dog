/* eslint-disable react/prop-types */
import Image from '../Helper/Image';
import './style.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li
      onClick={handleClick}
      className=' grid rounded overflow-hidden cursor-pointer even:col-start-2 even:col-end-4 even:row-span-2 max-sm:even:col-start-2 max-sm:even:col-end-2 max-sm:even:row-span-1'
    >
      <Image src={photo.src} alt={photo.title} />
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
