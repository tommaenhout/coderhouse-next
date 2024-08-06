import React from 'react'

interface IButton {
    children? : React.ReactNode;
    className? : string;
    onClick : () => void;
}

const Button : React.FC <IButton> = ({
    children, 
    onClick,
    className = "bg-black shadow-lg w-full text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500"
}) => {
  return (
    <button 
        onClick={onClick}
        className={className}>
        {children}
    </button>
  )
}

export default Button