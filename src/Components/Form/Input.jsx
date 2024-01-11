/* eslint-disable react/prop-types */
const Input = ({ label, type, name }) => {
  return (
    <div className=' mb-4 w-[100%]'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className=' border-2 block w-5/6 p-3 rounded bg-[#eee]'
      />
    </div>
  );
};

export default Input;
