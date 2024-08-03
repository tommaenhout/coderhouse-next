import React, { useEffect, useState } from 'react';
import List from './List';
import SublinksDesktop from './Navbar/SublinksNavBarDesktop';
import Image from 'next/image';
import gabber from '@/public/gabber-man.webp';
import gabberin from '@/public/gabber-woman.webp';

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
            onClick={() => {setIsHoverIntern(false)}}
            onMouseEnter={() => {setIsHoverIntern(true)}}
            onMouseLeave={() => {setIsHoverIntern(false)}}
            className={`h-auto w-full border-b-2 shadow-xl absolute transition-all justify-center z-10 bg-white  ${isHover || isHoverIntern ? 'flex' : '-translate-y-full'}`}>
                {(isHover || isHoverIntern) &&<> 
                <List 
                    ItemComponent={SublinksDesktop}
                    items={sublinksIntern}
                    sourceName='sublink'
                    className={`flex flex-col w-1/3 text-center`}/>
                <Image 
                    src={gabber}
                    alt='close'
                    width={250}
                    height={250}/>
                </>}
        </div>
    );
};
export default MenuList;