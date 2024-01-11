import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };
  return (
    <section className='flex flex-col itemns-center justify-center'>
      <h1 className=' font-bold mb-2'>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-start'
      >
        <Input label='Usuário' type='text' name='username' />
        <Input
          label='Senha'
          type='password'
          name='password'
          error=' deu erro'
        />

        <Button>enviar</Button>
      </form>
      <Link
        to={'/login/lost'}
        className=' w-[120px] mt-5 pb-1 border-b-2 font-medium'
      >
        Perdeu a senha?
      </Link>

      <div className='flex flex-col items-start justify-center mt-12 w-5/6'>
        <h1 className='font-bold'>Cadastre-se</h1>
        <p className=' text-start'>
          Ainda não possui conta? Cadastre-se no site
        </p>
        <Link
          to={'/login/create'}
          className=' py-2 px-10 bg-amber-400 rounded text-amber-700 mt-5'
        >
          cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
