import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = ({showMenu, setShowMenu}) => {
  return (
    <header className='h-[40px] w-full bg-primaryBg px-8 flex items-center fixed top-0 left-0 border-gray-500 border-b z-30'>
      <div onClick={() => setShowMenu(!showMenu)} className='w-[7%] md:hidden'>
        <FaBars className='hamburger-x' size={22} style = {{cursor: 'pointer', color: 'white' }}/>
      </div>
      <div className='w-[87%] md:w-full'>
        <h2 className='text-primaryColor font-bold text-xl text-center'>COIN<span className='text-white'>WISE</span></h2>
      </div>
    </header>
  )
}

export default Header