import React from 'react';
import Input from './../../Components/Form/Input';
import Button from './../../Components/Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Components/Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className=' z-1 opacity-0 translate-x-20 animate-animationleft grid grid-cols-2 gap-8 mt-16'>
      <form onSubmit={handleSubmit} className=' flex flex-col items-start'>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
          className=' mb-4'
        />
        {loading ? (
          <Button disabled>enviando...</Button>
        ) : (
          <Button>enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={` rounded bg-cover bg-center after:content after:block after:h-0 after:pb-[100%]`}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
