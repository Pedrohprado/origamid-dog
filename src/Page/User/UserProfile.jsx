import { useParams } from 'react-router-dom';
import Feed from '../../Components/Feed/Feed';
import Head from '../../Components/Helper/head';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className=' w-5/6 flex flex-col items-center justify-center pt-20'>
      <Head title={user} />
      <h1>{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
