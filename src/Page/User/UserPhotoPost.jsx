import Input from './../../Components/Form/Input';
const UserPhotoPost = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className=' z-1 opacity-0 translate-x-20 animate-animationleft'>
      <h3>postando</h3>
      <form onSubmit={handleSubmit}>
        <Input />
      </form>
    </section>
  );
};

export default UserPhotoPost;
