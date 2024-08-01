import { Link, SubLink } from "../Header";
import List from "../List";
import SublinkNavBarMobile from "./SublinkNavBarMobile";


export interface ILinkNavBarMobile {
    link: Link;
}

const LinkNavBarMobile : React.FC<ILinkNavBarMobile> = ({link}) => {
    return (
        <div 
            className='h-full p-4 cursor-pointer'>
            <div>{link.nameToShow}</div>
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