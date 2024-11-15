import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)

        if (email === 'anik@gmail.com' && password === '123456') {
            const user = {
name: 'Anik chowdhury',
email:'anik@gmail.com',
city: "Moulvibazar",
phoneNumber: "01889449660"

            }
            navigate('/profile',{state:user})
        }
        else {
            alert("Invaild email or Password")
            navigate('/signin')
        }
    }

    return (
        <div className='signin-container'>
            <h2>SignIN</h2>

            <form className='signin-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your email</label>
                    <input type="text" name='email' id='eamil ' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                    <button type='submit' >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Signin