import Link from 'next/link'
import React from 'react'
import { SubLink } from '../Header'
import { setIsHover, setOpenMobile } from '@/app/features/navbarSlice'
import { useAppDispatch } from '@/hooks/useRedux'

interface ISublinksDesktop {
    sublink : SubLink;
}

const SublinksDesktop : React.FC<ISublinksDesktop> = ({sublink}) => {
  return (
    <Link
        className='p-4 hover:bg-gray-200 cursor-pointer'
        href={sublink.link}>
            {sublink.name}
    </Link>
  )
}

export default SublinksDesktop