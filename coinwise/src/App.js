import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  const [menu, setMenu] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu)
  return (
    <div className='h-[100vh] w-full bg-white' id='main'>
      <div>
          <BrowserRouter>
            <Header showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className='flex h-[96vh]'>
              <div className={`bg-primaryBg absolute left-0 top-0 bottom-0 z-50 ${showMenu ? '' : 'transform -translate-x-full md:translate-x-0'} duration-300 ease-in-out md:static md:z-0`}>
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu} menu={menu} setMenu={setMenu} />
              </div>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
            </div>
            <Footer />
          </BrowserRouter>
      </div>
    </div>
  )
}

export default App