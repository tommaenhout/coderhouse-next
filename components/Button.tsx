import React from 'react'

interface IButton {
    children? : React.ReactNode;
    className? : string;
    onClick? : () => void;
    type? : "button" | "submit" | "reset";
}

const Button : React.FC <IButton> = ({
    children, 
    onClick,
    type,
    className = "bg-black shadow-lg w-full text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500"
}) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={className}>
        {children}
    </button>
  )
}

export default Button