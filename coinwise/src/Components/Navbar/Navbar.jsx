import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({menu, setMenu, showMenu, setShowMenu}) => {
  return (
    <>
      <header className='w-full h-[55px] pt-5 md:py-20'>
        <div className='px-3'>
          <FaTimes onClick={() => setShowMenu(!showMenu)} className='md:hidden' size={22} style = {{marginBottom: '40px', cursor: 'pointer', color: 'white' }}/>
        </div>
        <nav className='list-none text-primaryColor flex flex-col text-sm'>
          <Link to={'/home'} onClick={() => setMenu('home')} className={`px-3 mb-4 h-7 flex items-center ${menu === 'home'? 'bg-primaryColor text-primaryBg' : ''} duration-300 ease-in-out`}>
            <i class='bx bx-home-alt mr-4'></i>
            <p>Home</p>
          </Link>
          <Link to={'/cryptocurrencies'} onClick={() => setMenu('cryptocurriencies')} className={`px-3 mb-4 h-7 flex items-center ${menu === 'cryptocurriencies'? 'bg-primaryColor text-primaryBg' : ''} duration-300 ease-in-out`}>
            <i class='bx bxs-coin-stack mr-4'></i>
            <p>Cryptocurriencies</p>
          </Link>
          <Link to={'/exchanges'} onClick={() => setMenu('exchange')} className={`px-3 mb-4 h-7 flex items-center ${menu === 'exchange'? 'bg-primaryColor text-primaryBg' : ''} duration-300 ease-in-out`}>
            <i class='bx bx-wallet-alt mr-4'></i>
            <p>Exchange</p>
          </Link>
          <Link to={'/news'} onClick={() => setMenu('news')} className={`px-3 mb-4 h-7 flex items-center ${menu === 'news'? 'bg-primaryColor text-primaryBg' : ''} duration-300 ease-in-out`}>
            <i class='bx bx-news mr-4'></i>
            <p>News</p>
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar