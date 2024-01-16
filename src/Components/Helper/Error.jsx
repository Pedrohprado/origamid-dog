/* eslint-disable react/prop-types */
const Error = ({ error }) => {
  if (!error) return null;
  return <div className=' text-red-700'>{error}</div>;
};

export default Error;
