import React from 'react';
import Input from '../../Components/Form/Input';
import useForm from '../../Hooks/useForm';
import Button from '../../Components/Form/Button';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import Error from '../../Components/Helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const newpassword = useForm();
  const { loading, error, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (newpassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: newpassword.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className=' opacity-0 translate-x-20 animate-animationleft'>
      <h1 className=' text-2xl'>Resetar senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Insira a nova senha' type='password' {...newpassword} />
        {loading ? (
          <Button disabled>resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
