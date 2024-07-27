"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import MenuList from '@/components/MenuList';

const Header: React.FC = () => {
    const [isHover , setIsHover] = useState<{
        isHover: boolean;
        name: string;
    }>({
        isHover: false,
        name: ''
    });
    return (
        <header className='bg-white'>
            <div className='flex flex-col'>
                <div className='flex justify-center py-8 relative border-b border-black/15'>
                    <h1 className='text-4xl'>Hardcore Merch Shop</h1>
                    <div className='text-2xl absolute right-0 inset-y-0 flex items-center bg-red-100'>Logo container</div>
                </div>
                <nav className='shadow-xl border-b-black'>
                    <ul className='justify-center gap-8  flex container max-w-[1000px]'>
                        <li 
                            onMouseEnter={() => setIsHover({isHover: true, name: 'clothes'})}
                            onMouseLeave={() => setIsHover({isHover: false, name: ''})}
                            className='hover:underline h-full py-4'>
                            <Link href="/">Clothes</Link>
                        </li>
                        <li 
                            onMouseEnter={() => setIsHover({isHover: true, name: 'music'})}
                            onMouseLeave={() => setIsHover({isHover: false, name: ''})}
                            className='hover:underline h-full py-4'>
                            <Link href="/about">Music</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <MenuList isHover={isHover.isHover}/>
         </header>
    );
};

export default Header;