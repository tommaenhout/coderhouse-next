import Link from 'next/link';
import React from 'react';
import MenuList from '@/components/MenuList';

const Header: React.FC = () => {
    return (
        <header className='flex flex-col'>
            <div className='flex justify-center py-8 relative border-b border-black/15'>
                <h1 className='text-4xl'>Hardcore Merch Shop</h1>
                <div className='text-2xl absolute right-0 inset-y-0 flex items-center bg-red-100'>Logo container</div>
            </div>
            <nav className='shadow-xl border-b-black'>
                <ul className='justify-center gap-8 py-4 flex container max-w-[1000px]'>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/about">Music</Link>
                    </li>
                </ul>
                <MenuList/>
            </nav>
        </header>
    );
};

export default Header;