import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/userContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading, error } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button>enviar</Button>
        )}
      </form>
      {error && <p>{error}</p>}
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
