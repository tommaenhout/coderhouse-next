import Link from 'next/link';
import React, { useState } from 'react';


interface MenuListProps {
    isHover: boolean;
    sublinks: {
        name: string;
        link: string;
    }[];
}
const MenuList: React.FC<MenuListProps> = ({isHover, sublinks}) => {
    const [isHoverIntern, setIsHoverIntern] = useState<boolean>(false); 
    return (
        <ul 
            onMouseEnter={() => setIsHoverIntern(true)}
            onMouseLeave={() => setIsHoverIntern(false)}
            className={`h-[100px] w-full absolute transition-all z-10  bg-gray-100  ${isHover || isHoverIntern ? 'block' : '-translate-y-full'}`}>
            {sublinks.map((sublink, index) => (
                <li 
                    key={"sublink - " + index}
                    className='p-4 hover:bg-gray-200'>
                    <Link href={sublink.link}>{sublink.name}</Link>
                </li>
            ))}
        </ul>
    );
};
export default MenuList;