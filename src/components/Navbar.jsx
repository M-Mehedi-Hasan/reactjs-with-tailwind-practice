import React from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between item-center navbar'>
      <img src={logo} alt='HooBank' className='w-[124px] h-[32px]' />
      <ul className='list-none hidden sm:flex  justify-end item-center flex-1'>
        {navLinks.map((nav, index)=> <li 
        key={nav.id} 
        className={`font-poppins cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} font-normal text-[16px]`}>
          <a 
          href={`#${nav.id}`}> 
          {nav.title} 
          </a>
        </li>)}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(prev => !prev)}/>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end item-center flex-1'>
              {navLinks.map((nav, index)=> <li 
              key={nav.id} 
              className={`font-poppins cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} font-normal text-[16px] text-center`}>
                <a 
                href={`#${nav.id}`}> 
                {nav.title} 
                </a>
              </li>)}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar