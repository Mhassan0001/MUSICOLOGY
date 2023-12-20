import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
  <div className="container-fluid bg-black white p-lg-5 pt-5  ps-0">
       
   <div className="row">

    <div className="col-md-5">
        <ul>
      <h3 className='text-uppercase'>Musicology</h3>
      <li className='lead pe-4 pe-lg-5 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a minima eveniet omnis pariatur neque fuga eaque doloribus cupiditate aut.</li>

      <div className="row ">
        <div className="col-1">
            <p className='al'><InstagramIcon/></p>
        </div>
        <div className="col-1">
            <p className='al'> <FacebookIcon/></p>
        </div>
        <div className="col-1">
            <p className='al'><TwitterIcon/></p>
        </div>
        <div className="col-1">
            <p className='al'><WhatsAppIcon/></p>
        </div>
      </div>
     
      </ul>

    

    </div>


    <div className="col-md-2">
        <ul className=''>
            <h3 className='text-uppercase'>About</h3>
            <li className='pb-1' ><a href="" className='al '>History</a></li>
            <li className='pb-1'><a href="" className='al'>Our Team</a></li>
            <li className='pb-1'><a href="" className='al'>Brand Guidelines</a></li>
            <li className='pb-1'><a href="" className='al'>Term & Condition</a></li>
            <li className='pb-2 pb-lg-0'><a href="" className='al'>Privacy Policy</a></li>
        </ul>
    </div>


    <div className="col-md-2">
        <ul>
            <h3 className='text-uppercase'>Services</h3>
            <li className='pb-1'><a href="" className='al'>How to Order</a></li>
            <li className='pb-1'><a href="" className='al'>Our Product</a></li>
            <li className='pb-1'><a href="" className='al'>Our Status</a></li>
            <li className='pb-1'><a href="" className='al'>Promo</a></li>
            <li className='pb-2 pb-lg-0'><a href="" className='al'>Payment Method</a></li>
        </ul>
    </div>


    <div className="col-md-2">
        <ul>
            <h3 className='text-uppercase'>Other</h3>
            <li className='pb-1'><a href="" className='al'>Contact Us</a></li>
            <li className='pb-1'><a href="" className='al'>Help</a></li>
            <li className='pb-3 pb-lg-0'><a href="" className='al'>Privacy</a></li>
         
            
           

        </ul>
    </div>



   </div>
  </div>
  )
}

export default Footer