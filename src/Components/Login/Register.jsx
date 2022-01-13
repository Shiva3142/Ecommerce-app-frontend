import React, { useState } from 'react'

function Register(object) {
    let [signupdetails, updatesignupdetails] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    })
    function setLoginData(event) {
        updatesignupdetails((predata) => {
            return ({
                ...predata,
                [event.target.name]: event.target.value
            })
        })
    }
    function Signup(event) {
        event.preventDefault()
        if (signupdetails.fname === "" || signupdetails.lname === "" || signupdetails.email === "" || signupdetails.password === "") {
            window.alert("Values Can't empty")
        } else {

        }
    }
    return (
        <>
            <form onSubmit={Signup} className='signinForm registerForm'>
                <h2>
                    Create an account and discover the benefits
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti ex eaque sed, eum optio
                </p>
                <input type="text" name="fname" id="fname" placeholder='First Name' onChange={setLoginData} value={signupdetails.fname} required />
                <input type="text" name="lname" id="lname" placeholder='Last Name' onChange={setLoginData} value={signupdetails.lname} required />
                <input type="email" name="email" id="email" placeholder='E-mail' onChange={setLoginData} value={signupdetails.email} required />
                <input type="password" name="password" id="password" placeholder='Password' onChange={setLoginData} value={signupdetails.password} required />
                <div className="options">
                    <label htmlFor="conditions">
                        <input type="checkbox" name="keep" id="conditions" />
                        <span>I agree to the Google Terms of Service and Privacy Policy</span>
                    </label>
                </div>
                <button type="submit">Sign up</button>
                <div className='bottom'>
                    <span onClick={() => {
                        object.swapForm(0)
                    }} >Are you already a member?</span>
                </div>
            </form>
        </>
    )
}

export default Register
