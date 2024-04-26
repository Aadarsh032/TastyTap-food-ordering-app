import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useState } from 'react'

const App = () => {

  const[showLogin,setShowLogin] =useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app' >
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>}/>
        {/* <Route path='/Order' element={<PlaceOrder/>}/> */}
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App