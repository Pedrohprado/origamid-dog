/* eslint-disable react/prop-types */
import React from 'react';
import PhotoContent from '../../Page/Photo/PhotoContent';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../api';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOut(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div
      onClick={handleOut}
      className=' fixed w-screen h-screen z-10 top-0 left-0 bg-black/40 flex py-8 px-16 max-sm:p-8 max-sm:overflow-y-auto '
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
