"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import MenuList from '@/components/MenuList';
import { links } from '@/constants/links';
import { returnSublinks } from '@/utils/helpers';




const Header: React.FC = () => {
    const [isHover , setIsHover] = useState<{
        isHover: boolean;
        name: string;
    }>({
        isHover: false,
        name: ''
    });

    return (
        <header className='bg-white '>
            <div className='flex flex-col relative bg-white z-20'>
                <div className='flex justify-center py-8 relative border-b border-black/15'>
                    <h1 className='text-4xl title font-black p-4 rounded'>Hardcore Merch Shop</h1>
                    <div className='text-2xl absolute right-0 inset-y-0 flex items-center bg-red-100'>Logo container</div>
                </div>
                <nav className='shadow-xl border-b-black'>
                    <ul className='justify-center  flex container max-w-[1000px]'>
                        {links.map((link, index) => (
                        <li 
                            key={"link - " + index}
                            onMouseEnter={() => setIsHover({isHover: true, name: link.name})}
                            onMouseLeave={() => setIsHover({isHover: false, name: ''})}
                            className='hover:underline h-full p-4 cursor-pointer'>
                            <Link href={link.link}>{link.nameToShow}</Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <MenuList 
                sublinks={returnSublinks(isHover.name)} 
                isHover={isHover.isHover}/>
         </header>
    );
};

export default Header;