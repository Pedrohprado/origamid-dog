import FootDog from '../Assets/dogs-footer.svg/?react';
const Footer = () => {
  return (
    <footer className='w-full flex-col flex items-center justify-center px-4 mt-10 h-40 gap-4 bg-[#fb1]'>
      <FootDog />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
