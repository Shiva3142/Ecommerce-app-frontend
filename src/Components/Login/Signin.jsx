import React, { useState } from 'react'
import FacebookIcon from '../../Assets/Login/FacebookIcon.svg'
import GamilIcon from '../../Assets/Login/GmailIcon.svg'
function Signin(object) {
    let [logindetails, updatelogindetails] = useState({
        email: "",
        password: ""
    })
    function setLoginData(event) {
        updatelogindetails((predata) => {
            return ({
                ...predata,
                [event.target.name]: event.target.value
            })
        })
    }
    function Signin(event) {
        event.preventDefault()
        if (logindetails.email === "" || logindetails.password === "") {
            window.alert("Values Can't empty")
        } else {

        }
    }
    return (
        <>
            <form onSubmit={Signin} className='signinForm'>
                <h2>
                    Log in
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti ex eaque sed, eum
                </p>
                <input type="email" name="email" id="email" placeholder='E-mail' value={logindetails.email} onChange={setLoginData} required />
                <input type="password" name="password" id="password" placeholder='Password' value={logindetails.email} onChange={setLoginData} required />
                <div className="options">
                    <label htmlFor="keepSignin">
                        <input type="checkbox" name="keep" id="keepSignin" />
                        <span>Keep me signed in</span>
                    </label>
                    <div onClick={() => {
                        object.swapForm(2)
                    }}>
                        Forgot password?
                    </div>
                </div>
                <div className="otheroptions">
                    <div>
                        <img src={FacebookIcon} alt="" />
                        <span>Facebook</span>
                    </div>
                    <div>
                        <img src={GamilIcon} alt="" />
                        <span>Gmail</span>
                    </div>
                </div>
                <button type="submit">Sign in</button>
                <div className='bottom'>
                    <div className='bottom' onClick={() => {
                        object.swapForm(1)
                    }}>
                        <span>Not a member yet?</span>
                        <span >Sign up</span>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signin
