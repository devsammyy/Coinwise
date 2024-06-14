import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({menu, setMenu, showMenu, setShowMenu}) => {
  return (
    <>
      <header className='w-full h-[55px] pt-5 px-8 md:py-20'>
        <FaTimes onClick={() => setShowMenu(!showMenu)} className='md:hidden' size={22} style = {{marginBottom: '40px', cursor: 'pointer', color: 'white' }}/>
        <nav className='list-none text-primaryColor flex flex-col'>
          <Link to={'/'} onClick={() => setMenu('home')} className='text-lg font-bold mb-3'>Home</Link>
          <Link onClick={() => setMenu('about')} className='text-lg font-bold mb-3'>About</Link>
          <Link onClick={() => setMenu('contact')} className='text-lg font-bold mb-3'>Contact</Link>
          <Link onClick={() => setMenu('top stories')} className='text-lg font-bold mb-3'>Top stories</Link>
          <Link onClick={() => setMenu('new')} className='text-lg font-bold mb-3'>New</Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar