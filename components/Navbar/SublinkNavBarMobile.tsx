import Link from "next/link";
import { SubLink } from "../Header";

export interface ISublinkNavBarMobile {
    sublink: SubLink;
}

const SublinkNavBarMobile : React.FC<ISublinkNavBarMobile> = ({sublink}) => {
    return (
        <Link
            className='p-4 hover:bg-gray-200 cursor-pointer'
            href={sublink.link}>
                {sublink.name}
        </Link>
    )
}

export default SublinkNavBarMobile;