/* eslint-disable react/prop-types */
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className=' mb-4 w-[100%]'>
      <label htmlFor={name} className=' block leading-4 pb-2'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className=' border-2 block w-5/6 p-3 rounded bg-[#eee]'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className=' text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
