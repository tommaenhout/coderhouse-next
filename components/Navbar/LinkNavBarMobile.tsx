"use client";

import Link from "next/link";
import { Link as LinkNavbar } from "../Header";
import List from "../List";
import SublinkNavBarMobile from "./SublinkNavBarMobile";
import { useAppDispatch } from "@/hooks/useRedux";
import { setOpenMobile } from "@/app/features/navbarSlice";



export interface ILinkNavBarMobile {
    link: LinkNavbar;
}

const LinkNavBarMobile : React.FC<ILinkNavBarMobile> = ({link}) => {
    const dispatch = useAppDispatch();
    return (
        <div 
            className='h-full p-4 cursor-pointer'>
            <Link
                className="hover:underline cursor-pointer" 
                onClick={() => dispatch(setOpenMobile(false))}
                href={link.link}>{link.nameToShow}</Link>
            <ul className='flex flex-col'>
               <List
                    className='flex flex-col gap-y-4'
                    items={link.sublinks}
                    sourceName='sublink'
                    ItemComponent={SublinkNavBarMobile}/>  
            </ul>
        </div>
    ) 
}

export default LinkNavBarMobile;