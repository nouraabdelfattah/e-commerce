import React, { useState } from 'react';

export default function ContactUs() {
  
  const user = JSON.parse(localStorage.getItem("currentUser")) || {}; // Fallback to an empty object
  const [userData, setUserData] = useState({
    
    username:user.username,
    email:user.email,
    phone: "",
    address: ""
  });
   const [pass,setPass]=useState("")
  console.log(user)
  const [updateData, setUpdateData] = useState(false); // Corrected state variable name

  const handleUpdateClick = () => {
    setUpdateData(true);
  };
const handleSet=()=>{
if(pass===user.password){
  localStorage.setItem('currentUser', JSON.stringify(userData));
 
}
console.log(user)
}
  return (
    <div className='contact container mt-5  '>
     {!updateData&& <div className='container text-center profile'>
        <img className=' col-md-2 col-4 ' src='/user-286-512.png' alt='User Icon' />
        <div className='container border col-md-6 p-4 px-3 text-start profile-data'>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
        </div>
        <button className='update-button col-md-3 col-4 mt-3 p-1' onClick={handleUpdateClick}>Update</button>
      </div>}
      {updateData && (
        <div className='update-profile '>
          <h2 className='text-center mt-4 border-bottom pb-3'>Update your profile</h2>
          <form className='container border p-4 form-contact mt-5 col-md-6 col-sm-12'>
            <label>Name:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Name'
            
            value={userData.username}
            onChange={(e)=>{
              setUserData({...userData,username:e.target.value})
            }}
            />
             {/* <label>Email:</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your Name'
            
            value={userData.email}
            onChange={(e)=>{
              setUserData({...userData,email:e.target.value})
            }}
            /> */}
            <label>Phone:</label>
            <input className='p-1 w-100 my-2' type='number' placeholder='Enter Your Phone' 
              value={userData.phone}
              onChange={(e)=>{
                setUserData({...userData,phone:e.target.value})}}
            />
             <label>Address</label>
            <input className='p-1 w-100 my-2' type='text' placeholder='Enter Your address'
             value={userData.address}
            
             onChange={(e)=>{
              setUserData({...userData,address:e.target.value})}} />
            
            <label>Password:</label>
            <input className='p-1 w-100 my-2' type='password' placeholder='Enter Your Password'
             value={pass}
             required
             onChange={(e)=>{
               setPass(e.target.value)}} />
            <button className='w-25 p-1 mt-1' onClick={handleSet}>Set</button>
          </form>
        </div>
      )}
    </div>
  );
}
