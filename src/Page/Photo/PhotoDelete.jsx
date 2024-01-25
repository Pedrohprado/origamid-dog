/* eslint-disable react/prop-types */
import useFetch from '../../Hooks/useFetch';
import { DELETE_PHOTO } from '../../api';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleSubmit() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = DELETE_PHOTO(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button onClick={handleSubmit} disabled>
          deletar
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className=' bg-gray-300 text-sm rounded py-1 px-2'
        >
          deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
