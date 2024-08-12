import React, { useState } from 'react'
export default function ContactUs() {
   const [message,setMessage]=useState(false)
  return (
    <div className='container contact'> 
    <h2 className='text-center mt-4 border-bottom pb-3'>Let us know your opinion!</h2>
      <form className='container border p-4 form-contact mt-5 col-md-5 col-sm-12'>
        <label>Name:</label>
        <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Name' />
        <label>Email:</label>
        <input className='p-1 w-100 my-2'type='text' placeholder='Enter Your Email' />
        <label>Phone:</label>
        <input className='p-1 w-100 my-2' type='Number' placeholder='Enter Your Phone' /> 
        <textarea cols={40} rows={10} className='p-1 w-100' placeholder='write Your Feedback'/>
        <button className='w-25 p-1 mt-1 ' onClick={()=>setMessage(true)}>Submit</button>
        {message&&<p>Message sent successfuly </p>}
      </form>
    </div>
  )
}
