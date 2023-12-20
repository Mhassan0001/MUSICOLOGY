import React from 'react'
import Home from './Home'
import Product from './Product'
import Nav from './Nav'
import Promo from './Promo'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const App = () => {
  return (
   <>
   <Nav/>
   <Home/>
  <Product/>
   <Promo/>
   <About/>
   <Contact/>
   <Footer/>
   
   
   </>
  )
}

export default App