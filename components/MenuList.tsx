import React, { useState } from 'react';


interface MenuListProps {
    isHover: boolean;
}
const MenuList: React.FC<MenuListProps> = ({isHover}) => {
    const [isHoverIntern, setIsHoverIntern] = useState<boolean>(false); 
    return (
        <ul 
            onMouseEnter={() => setIsHoverIntern(true)}
            onMouseLeave={() => setIsHoverIntern(false)}
            className={`h-[100px] w-full absolute transition-all z-10  bg-gray-100  ${isHover || isHoverIntern ? 'block' : '-translate-y-full'}`}>
            {}
        </ul>
    );
};
export default MenuList;