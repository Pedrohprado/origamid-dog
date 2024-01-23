import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div>
      <div>
        <img src={photo.src} alt={photo.title} />
        <div>
          <div>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span>{photo.acessos}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
