import { setIsHover } from '@/app/features/navbarSlice'
import Link from 'next/link'
import { Link as LinkHeader } from '../Header'
import React from 'react'
import { useDispatch } from 'react-redux'

interface ILinkNavbarDesktop {
    link: LinkHeader
}

const LinkNavbarDesktop : React.FC<ILinkNavbarDesktop> = ({link}) => {
    const dispatch = useDispatch()
  return (
    <Link 
        onClick={() => dispatch(setIsHover({ isHover: false, name: ""}))}
        onMouseEnter={() => dispatch(setIsHover({ isHover: true, name: link.name }))}
        onMouseLeave={() => dispatch(setIsHover({ isHover: false, name: "" }))}
        className="hover:underline h-full p-4 cursor-pointer" href={link.link}>
        {link.nameToShow}
    </Link>
  )
}

export default LinkNavbarDesktop