"use client"
import React from 'react'
import Button from './Button'
import { useAuthContext } from './context/AuthContext'

const ButtonLogout = () => {
const {logout} = useAuthContext();
  return (
    <Button 
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'   
        onClick={logout}>Logout</Button>
  )
}

export default ButtonLogout