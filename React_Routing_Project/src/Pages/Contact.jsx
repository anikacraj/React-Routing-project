import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Contact() {
    const navigate =useNavigate();
    const handlePage=()=>{
        navigate("/");
    }
  return (
    <div>

        <h1>Welcome to contact page </h1>

        <button onClick={handlePage}>GO to Home page </button>
    </div>
  )
}

export default Contact