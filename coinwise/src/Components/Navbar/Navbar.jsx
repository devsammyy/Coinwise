import React from 'react'

const Navbar = ({menu, setMenu}) => {
  return (
    <>
      <header className='w-full h-[55px] py-3 px-8'>
        <h1 className='text-lg text-white font-bold mb-7'>X</h1>
        <nav className='list-none'>
          <li onClick={() => setMenu('home')} className='text-white text-lg font-bold mb-3'>Home</li>
          <li onClick={() => setMenu('about')} className='text-white text-lg font-bold mb-3'>About</li>
          <li onClick={() => setMenu('contact')} className='text-white text-lg font-bold mb-3'>Contact</li>
          <li onClick={() => setMenu('top stories')} className='text-white text-lg font-bold mb-3'>Top stories</li>
          <li onClick={() => setMenu('new')} className='text-white text-lg font-bold mb-3'>New</li>
        </nav>
      </header>
    </>
  )
}

export default Navbar