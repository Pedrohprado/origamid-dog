/* eslint-disable react/prop-types */

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='
      min-w-32 
      cursor-pointer 
      bg-[#fb1] 
      rounded 
      text-[#764701] 
      px-5 
      py-3 
      transition 
      delay-75  
      hover:bg-[#c99d2d] 
      hover:ring-1 
      hover:ring-[#fb1]  
      focus:outline-none 
      focus:ring-1 
      focus:ring-[#c99d2d]
       disabled:opacity-50
      disabled:cursor-wait 
    '
    >
      {children}
    </button>
  );
};

export default Button;
