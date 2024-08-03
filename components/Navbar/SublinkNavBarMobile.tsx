import Link from "next/link";
import { SubLink } from "../Header";
import { useAppDispatch } from "@/hooks/useRedux";
import { setOpenMobile } from "@/app/features/navbarSlice";

export interface ISublinkNavBarMobile {
    sublink: SubLink;
}

const SublinkNavBarMobile : React.FC<ISublinkNavBarMobile> = ({sublink}) => {
    const dispatch = useAppDispatch();
    return (
        <Link
            onClick={() => dispatch(setOpenMobile(false))}
            className='p-4 hover:bg-gray-200 cursor-pointer'
            href={sublink.link}>
                {sublink.name}
        </Link>
    )
}

export default SublinkNavBarMobile;