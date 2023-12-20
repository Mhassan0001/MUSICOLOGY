import React from 'react'

const Contact = () => {
  return (
<>


  <div className="container-fluid  orange white" id='contact'>
    <div className="customizepab">
    <div className="row ">
      <div className=" offset-md-3 col-md-6">
        <h3 className='text-center fs-1 pb-3'>SUBSCRIBE</h3>
        <p className='text-center pb-lg-4 pb-4 fs-4 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a voluptates voluptatem, maxime minus repudiandae?</p>
   



      </div>
    </div>
    <div className="row g-0">
      <div className="col-5 offset-2 col-lg-3 offset-lg-4 col-md-3  offset-md-4    ">
        <div className="form-group">
          <input type="text" placeholder='Your Email' className='form-control' />
      
        </div> 
      </div>

      <div className="col ">
      <button className='btn btn-dark'>SUBSCRIBE</button>
      </div>
    </div>
    </div>
  </div>



</>
  )
}

export default Contact