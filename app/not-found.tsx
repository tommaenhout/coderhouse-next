"use client"
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const NotFound: NextPage = () => {
    const router = useRouter();
    return (
        <main className='h-screen w-full flex justify-center items-center container flex-col gap-y-8'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button
                onClick={() => router.back()}
                className='bg-blue-500 text-white p-2 rounded-md' >
                Go back
            </button>
        </main>
    );
};

export default NotFound;