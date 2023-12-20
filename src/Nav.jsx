import React from 'react'
import {Link} from 'react-scroll';
import a from './img/a.png'
import SearchIcon from '@mui/icons-material/Search';
const Nav = () => {
  return (
  <>

 <div className="container-fluid p-0">
 <div className="row">
    <div className="col">
        <nav className='navbar navbar-expand-md fixed-top  bg-black navbar-dark   '>

             <img className='navbar-brand  ps-md-5 ps-1 '  src={a} alt="" />

            <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#iv'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center " id='iv'>
            <ul className='navbar-nav pe-lg-5  ' >
                <li className='nav-item'><Link className='nav-link' id='hover'  to="home" spy={true} smooth={true} offset={-100} duration={100}>HOME</Link></li>

                <li className='nav-item'><Link className='nav-link '  id='hover'  to="product" spy={true} smooth={true} offset={-63} duration={100}>PRODUCT</Link></li>

                <li className='nav-item'><Link className='nav-link' to="promo" id='hover' spy={true} smooth={true} offset={-63} duration={100}>PROMO</Link></li>

                <li className='nav-item'><Link className='nav-link'  id='hover'  to="about" spy={true} smooth={true} offset={-66} duration={100}>ABOUT</Link></li>

                <li className='nav-item'><Link className='nav-link'  id='hover'  to="contact" spy={true} smooth={true} offset={-66} duration={100}>CONTACT</Link></li>

                
            </ul>
           
            </div>

            <p className=' d-none d-lg-flex d-md-flex  pe-lg-1 m-lg-1 m-md-1 white cursor'>
                
                <SearchIcon fontSize='large'/>
                
            </p>
        
         
        </nav>
    </div>
 </div>



 </div>
  
  
  </>
  )
}

export default Nav