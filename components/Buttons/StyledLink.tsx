
import Link from 'next/link'
import React from 'react'

interface IIlink {
    href : string;
    children : React.ReactNode;
    }


const StyledLink : React.FC<IIlink> = ({href, children}) => {

  return (
    <Link href={href} className="bg-black shadow-lg w-full text-white p-2 rounded hover:scale-110 hover:shadow-lg hover:bg-gray-800 transition-all duration-500">
        {children}
    </Link>
  )
}

export default StyledLink