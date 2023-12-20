import React from 'react'
import f from './img/f.png'
import './Promo.css'
const Promo = () => {
  return (
  <>
<div className="container-fluid bg-dark" id='promo'>
  <div className="customizep">
<div className="row">

  <div className="col">
    <h3 className='text-center pb-3 white fs-1'>
      PRICING
    </h3>
    <p className='text-center  fs-4 white lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ex ratione delectus laborum enim ipsa distinctio!</p>
  </div>

</div>

<div className="container ps-4 pt-5">
<div className="row pt-3  ps-5">

 <div className="col-md-4 pb-5 pb-md-0 "  data-aos="zoom-in"  data-aos-duration="1000">
   <div  className=" py-4  w-75  text-center  orange">
    <div className="pb-4"><img src={f} className='size' alt="" /></div>  
      <h3 className='white pb-1'>BASIC</h3>
      <p className='white pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button className='btn btn-md w-75 btn-dark  white'>$150.00</button>
   </div>
 </div>

 <div className="col-md-4 pb-md-0 pb-5 " data-aos="zoom-in"  data-aos-duration="1000">
   <div className=" py-4  w-75 text-center  orange">
    <div className="pb-4"><img src={f} className='size' alt="" /></div>  
      <h3 className='white pb-1 ' >PROFESSIONAL</h3>
      <p className='white pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button className='btn btn-md w-75 btn-dark white'>$200.00</button>
   </div>
 </div>

 <div className="col-md-4 " data-aos="zoom-in"  data-aos-duration="1000">
   <div className=" py-4 w-75 text-center  orange">
    <div className="pb-4"><img src={f} className='size' alt="" /></div>  
      <h3 className='white pb-1'>ULTIMATE</h3>
      <p className='white pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button className='btn btn-md w-75 btn-dark white'>$250.00</button>
   </div>
 </div>
  
</div>
</div>






</div>
</div>

  
  </>
  )
}

export default Promo