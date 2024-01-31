/* eslint-disable react/prop-types */
import React from 'react';
import useFetch from '../../Hooks/useFetch';

import DogSend from '../../Assets/enviar.svg?react';

import { COMMENT_POST } from '../../api';
import Error from '../../Components/Helper/Error';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-between w-full'
    >
      <textarea
        className=' border w-5/6 h-10 p-2 resize-none overflow-hidden'
        id='comment'
        name='comment'
        placeholder='comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className=' py-1 px-2'>
        <DogSend />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
