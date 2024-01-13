import { Link } from 'react-router-dom';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
import React from 'react';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  };
  return (
    <section className='flex flex-col itemns-center justify-center'>
      <h1 className=' font-bold mb-2'>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-start'
      >
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

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
