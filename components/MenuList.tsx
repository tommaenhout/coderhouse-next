import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import List from './List';
import SublinksDesktop from './Navbar/SublinksNavBarDesktop';

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
            onMouseEnter={() => {setIsHoverIntern(true)}}
            onMouseLeave={() => {setIsHoverIntern(false)}}
            className={`h-auto w-full absolute transition-all z-10 bg-gray-100  ${isHover || isHoverIntern ? 'flex' : '-translate-y-full'}`}>
                <List 
                ItemComponent={SublinksDesktop}
                items={sublinksIntern}
                sourceName='sublink'
                className={`flex flex-col w-full`}/>
        </div>
    );
};
export default MenuList;