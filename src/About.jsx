import {React,useEffect} from 'react'
import g from './img/g.png'
import h from './img/h.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const About = () => {
    
    
  return (
   <>
<div className="container-fluid  g-0  " id='about'>

    <div  className="row  g-0 ">
        <div  className="col-md-6 order-1 order-lg-0 order-md-0 " >
         <img className='w-100 h-100'   src={g} alt="" />
        </div>

        <div  className="col-md-6 order-0  order-lg-1 order-md-1  "data-aos="zoom-in"data-aos-duration="1000">
        
            <div className=' w-100 h-100 orange p-5 white '>
            <div className="customizeaboutp  ">
             <h3 className='fs-1  pb-3'data-aos="fade-right" data-aos-duration="1000">AMAZING DANCE</h3>
             <p className='pe-lg-5 fs-3   lead pb-lg-4 pb-3 'data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde laboriosam quae modi! Voluptate aliquam qui quaerat, possimus magnam aperiam!</p>
             <button className='btn btn-dark w-50 btn-md 'data-aos="fade-right"  data-aos-duration="1000">READ MORE</button>
             </div>
            </div>
            
        </div>

    </div>

    <div className="row  g-0">

        
    <div className="col-md-6  order-2 order-lg-2 order-md-2"data-aos="zoom-in"data-aos-duration="1000">
        
        <div className=' w-100 h-100 orange p-5 white'>
        <div className="customizeaboutp ">
         <h3 className='fs-1 pb-3'data-aos="fade-right" data-aos-duration="1000">BEST DANCE</h3>
         <p className=' pe-lg-5 fs-3 lead pb-lg-4 pb-3'data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde laboriosam quae modi! Voluptate aliquam qui quaerat, possimus magnam aperiam!</p>
         <button className='btn btn-dark w-50 btn-md'data-aos="fade-right"  data-aos-duration="1000">READ MORE</button>
         </div>
        </div>
        

      

    </div>

    <div className="col-md-6 order-lg-3 order-md-3 order-3">
         <img className='w-100 h-100' src={h} alt="" />
        </div>
    </div>
    {/* ------------------------------------------------------------------------------------------- */}

<div className="container-fluid bg-dark white">
    <div className="customizepab">
        <div className="row ">
            <div className="col">
             <h3 className='text-center pb-3 fs-1'>OUR STATISTICS</h3>
             <p className='text-center lead fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Totam, quidem.</p>
            </div>
        </div>

<div className="container pt-3 ">
        <div className="row pt-5 text-center">
            <div className="col-md-4" >
                <h1 data-aos="fade-up" data-aos-duration="1000" >1240+</h1>
                <p className='lead pb-lg-2 pb-3'>Club</p>
            </div>
            <div className="col-md-4">
                <h1 data-aos="fade-up" data-aos-duration="1000">1000+</h1>
                <p className='lead pb-lg-2 pb-3'>Active Member</p>
            </div>
            <div className="col-md-4">
                <h1 data-aos="fade-up" data-aos-duration="1000">1.000+</h1>
                <p className='lead pb-lg-2'>Community</p>
            </div>
        </div>
        </div>
    </div>
</div>
    




</div>
   </>
  )
}

export default About