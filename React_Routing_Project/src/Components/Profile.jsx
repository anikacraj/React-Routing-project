import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
   const {state}= useLocation();
  return (
    <div className='profile-container'>

<h2>User Profile </h2>

<div className="profile-info">

{state ? <>
    <p>
    <span>Name :</span>
   {state.name}
</p>
<p>
    <span>Email :</span>
    {state.email}
</p>
<p>
    <span>City :</span>
   {state.city}
</p>
<p>
    <span>Phone Number :</span>
   {state.phoneNumber}
</p> 


</> : <p style={{textAlign:'center'}}>No Profile Exists </p> }


</div>

    </div>
  )
}

export default Profile