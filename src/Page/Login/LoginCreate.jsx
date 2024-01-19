import React from 'react';
import Button from '../../Components/Form/Button';
import Input from '../../Components/Form/Input';
import Error from '../../Components/Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { USER_POST } from '../../api';
import { UserContext } from '../../Context/userContext';

const LoginCreate = () => {
  const { loading, error, request } = useFetch();
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    if (username.validate() && email.validate() && password.validate()) {
      const { response } = await request(url, options); //I used hook useFetch() for
      if (response.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <section className='flex flex-col itemns-center justify-center opacity-0 translate-x-20 animate-animationleft'>
      <h1 className=' text-3xl font-bold mb-10 leading-4 relative'>
        Cadastre-se
      </h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>cadastrando...</Button>
        ) : (
          <Button>cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
