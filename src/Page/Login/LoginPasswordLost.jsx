import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../../Components/Helper/Error';

const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: 'http://localhost:5173/login/lost',
      });
      request(url, options);
    }
  }
  return (
    <section className=' opacity-0 translate-x-20 animate-animationleft'>
      <h1 className=' text-2xl mb-2'>Perdeu a senha?</h1>
      {data ? (
        <div>{data}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='email' {...email} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
