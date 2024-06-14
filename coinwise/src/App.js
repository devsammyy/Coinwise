import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import 'boxicons/css/boxicons.min.css';
import Cryptocurrencies from './Pages/Cryptocurrencies/Cryptocurrencies'
import CryptoDetails from './Pages/CryptoDetails/CryptoDetails'
import Exchanges from './Pages/Exchanges/Exchanges'
import News from './Pages/News/News'
import store from './App/store'
import { Provider } from 'react-redux'
import BlogContextProvider from './Context/BlogContext'

const App = () => {
  const [menu, setMenu] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu)
  return (
    <div className='h-[100vh] w-full bg-white' id='main'>
      <div>
        {/* <Provider store={store}> */}
        <BlogContextProvider>
          <BrowserRouter>
            <Header showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className='flex h-[100vh]'>
              <div className={`bg-primaryBg absolute left-0 top-0 bottom-0 w-[220px] z-50 ${showMenu ? '' : 'transform -translate-x-full md:translate-x-0'} duration-300 ease-in-out md:static md:z-0`}>
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu} menu={menu} setMenu={setMenu} />
              </div>
              <div className='page-bx w-full'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                  <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                  <Route path='/exchanges' element={<Exchanges />} />
                  <Route path='/news' element={<News />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </BlogContextProvider>
        {/* </Provider> */}
      </div>
    </div>
  )
}

export default App