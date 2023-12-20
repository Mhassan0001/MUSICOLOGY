import React from 'react'
import c from '../src/img/c.png'
import d from '../src/img/d.png'
import e from '../src/img/e.png'

const Product = () => {
  return (
   <>
   <div className="container-fluid orange white" id='product'>
    <div className="customizep">
    <div className="row">
      <div className="col">
        <h2 className='text-center fs-1 pb-3 text-uppercase'>Dance Tour</h2>

        <div className="row">
          <div className="col">
            <p className='text-center lead pb-md-5 pb-5 fs-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> Repudiandae possimus qui nobis.</p>
          </div>
        </div>
      </div>

 
    </div>
    
<div className="container ps-4 ps-md-0   px-lg-5">

    <div className="row  ps-2 ps-md-0  ">
      <div className="col-md-4 pb-md-0 pb-5 "data-aos="flip-left" data-aos-duration="1000">
        <img className='sze' src={c} alt="" />
        <div className='bg-dark   wh  '>
          <p className='text-center  pt-3 fs-3'>AMERICA</p>
          <p className='text-center px-3  fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quaerat.</p>
        </div>
         
      </div>

      <div className="col-md-4 pb-md-0 pb-5 " data-aos="fade-up" data-aos-duration="1000">
        <img className='sze' src={d} alt="" />
        <div className=' bg-dark wh  '>
          <p className='text-center  pt-3 fs-3'>ASIA</p>
          <p className='text-center  px-3 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quaerat.</p>
        </div>
      
      </div>

      <div className="col-md-4  pb-md-0 pb-0 "data-aos="flip-right" data-aos-duration="1000">
        <img className='sze' src={e} alt="" />
        <div className='bg-dark wh  '>
          <p className='text-center  pt-3 fs-3'>AUSTRALIA</p>
          <p className='text-center  px-3 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quaerat.</p>
        </div>
      </div>
    </div>
    </div>
    </div>

   </div>
   
   </>
  )
}

export default Product