import React from 'react'
import Button from './Button'

interface IError {
    message: string;
    children: React.ReactNode
}

const Error : React.FC<IError> = ({message, children}) => {
  return (
    <div className='flex w-96 h-40 justify-end gap-9 text-center items-center flex-col mx-auto'>
      <h2>{message}</h2>
        {children}
    </div>
  )
}

export default Error