import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth, path }) => {
  return (
    <Link 
      to={path} 
      
      rel="noopener noreferrer" 
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor 
          ? `${backgroundColor} ${textColor} ${borderColor}` 
          : 'bg-sky-blue text-white border-coral-red'} 
        rounded-full ${fullWidth && 'w-full'} 
        transition-all duration-300 ease-in-out
        hover:bg-coral-red hover:text-white hover:bg-sky-blue hover:border-white`}
    >
      <button>
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </Link>
  );
}

export default Button;
