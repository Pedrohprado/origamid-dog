import React from 'react';

import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';

import useFetch from '../../Hooks/useFetch';
import Error from '../../Components/Helper/Error';
import Loading from '../../Components/Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className=' w-5/6 flex flex-col items-center justify-center pt-20'>
        <PhotoContent data={data} />
      </div>
    );
};

export default Photo;
