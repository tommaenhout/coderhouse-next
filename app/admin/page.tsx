import { NextPage } from 'next'
import React from 'react'

const AdminPage : NextPage = () => {
  return (
    <section className='flex flex-col gap-8'>
        <h1 className='text-3xl font-bold text-center'>Admin Page</h1>
        <p className='text-center'>
            This is the admin page. You can manage your products and orders here.
            This page will be protected.
        </p>
    </section>
  )
}

export default AdminPage