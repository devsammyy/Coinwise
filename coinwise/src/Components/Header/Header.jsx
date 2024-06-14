import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = ({showMenu, setShowMenu}) => {
  return (
    <div className='h-[60px] w-full bg-primaryBg px-8 flex items-center fixed top-0 left-0 z-30'>
      <div onClick={() => setShowMenu(!showMenu)} className='w-[7%] md:hidden'>
        <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>
      </div>
      <div className='w-[87%] md:w-full'>
        <h2 className='text-primaryColor font-bold text-xl text-center'>COIN<span className='text-white'>WISE</span></h2>
      </div>
    </div>
  )
}

export default Header