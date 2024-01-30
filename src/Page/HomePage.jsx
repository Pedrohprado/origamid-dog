import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/head';
const HomePage = () => {
  return (
    <section className=' w-5/6 flex flex-col items-center justify-center pt-20'>
      <Head title='Fotos' />
      <Feed />
    </section>
  );
};

export default HomePage;
