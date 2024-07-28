import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface MenuListProps {
    isHover: boolean;
    sublinks: {
        name: string;
        link: string;
    }[];
}
const MenuList: React.FC<MenuListProps> = ({isHover, sublinks}) => {
    const [isHoverIntern, setIsHoverIntern] = useState<boolean>(false); 
    const [sublinksIntern, setSublinksIntern] = useState<{
        name: string;
        link: string;
    }[]>(sublinks);

    useEffect(() => {
       if ((isHover || isHoverIntern) && sublinks.length > 0) {
         setSublinksIntern(sublinks);
       }
    }, [isHover, sublinks]);

    return (
        <div
            onMouseEnter={() => {
                setIsHoverIntern(true)}}
            onMouseLeave={() => {
                setIsHoverIntern(false)}}
            className={`h-auto w-full absolute transition-all z-10 bg-gray-100  ${isHover || isHoverIntern ? 'flex' : '-translate-y-full'}`}>
            <ul 
                className={`flex flex-col w-full`}>
                {sublinksIntern.map((sublink, index) => (
                    <Link 
                        key={"sublink - " + index}
                        className='p-4 hover:bg-gray-200 cursor-pointer'
                        href={sublink.link}>
                            {sublink.name}
                    </Link>
                ))}
            </ul>
        </div>
    );
};
export default MenuList;