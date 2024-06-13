import React from 'react'

const Navbar = ({menu, setMenu, showMenu, setShowMenu}) => {
  return (
    <>
      <header className='w-full h-[55px] py-3 px-8'>
        <h1 onClick={() => setShowMenu(!showMenu)} className='text-lg text-white font-bold mb-7'>X</h1>
        <nav className='list-none text-primaryColor'>
          <li onClick={() => setMenu('home')} className='text-lg font-bold mb-3'>Home</li>
          <li onClick={() => setMenu('about')} className='text-lg font-bold mb-3'>About</li>
          <li onClick={() => setMenu('contact')} className='text-lg font-bold mb-3'>Contact</li>
          <li onClick={() => setMenu('top stories')} className='text-lg font-bold mb-3'>Top stories</li>
          <li onClick={() => setMenu('new')} className='text-lg font-bold mb-3'>New</li>
        </nav>
      </header>
    </>
  )
}

export default Navbar