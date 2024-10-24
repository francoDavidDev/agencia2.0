import React from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <nav className='hidden lg:flex'>
          <ul className='flex text-white gap-x-8'>
          {navLinks.map((item,index)=>{
            return (
              <li key={index}>
                <Link className='text-white  transition font-bold cursor-pointer'    spy={true} smooth={true} offset={10}
                duration={500} to={item.name}  >{item.label_spanish}</Link>
            </li>
            )
            
          })}
          </ul>
        </nav>
      )
}

export default Nav