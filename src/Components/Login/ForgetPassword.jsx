import React, { useState } from 'react'
import CountryCodes from '../../Assets/Login/Data/countryCodes.json'
import DefaultSnackBar from '../Templates/DefaultSnackBar';



function ForgetPassword(object) {
    let [resetDetails, updateresetDetails] = useState({
        email: "",
        countrycode: "+91",
        phone: ""
    })
    let [snackContent, updateSnackContent] = useState({
        type: "",
        message: "",
        isOpen: false
    })
    const handleClose = () => {
        updateSnackContent({
            ...snackContent,
            isOpen: false
        })
    };
    function setResetSetails(event) {
        updateresetDetails((preValue) => {
            return ({
                ...preValue,
                [event.target.name]: event.target.value
            })
        })
    }
    function ForgetPassword(event) {
        event.preventDefault()
        if (resetDetails.email === "" && resetDetails.phone === "") {
            // window.alert("Please FIll any on value")
            updateSnackContent({
                type: "warning",
                message: "Please FIll any on value",
                isOpen: true
            })
        } else {
            updateSnackContent({
                type: "success",
                message: "You can Proceed",
                isOpen: true
            })
        }
    }
    return (
        <>
            <form onSubmit={ForgetPassword} className='signinForm forgotPasswordForm'>
                <h2>
                    Forgot your password?
                </h2>
                <p>
                    Enter your email or phone number and recover your accountur provident?
                </p>
                <input type="email" name="email" id="email" placeholder='E-mail' onChange={setResetSetails} value={resetDetails.email} />
                <div className="orcontainer">
                    <div></div>
                    <span>or</span>
                    <div></div>
                </div>
                <div className="numberInput">
                    <select name="countrycode" id="countrycode" value={resetDetails.countrycode} onChange={setResetSetails}>
                        <option value="+91">+91</option>
                        {
                            CountryCodes.map((value, index) => {
                                return (
                                    <option key={index} value={value.dial_code}>
                                        {value.dial_code}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <input type="number" name="phone" id="phone" placeholder='Phone number' onChange={setResetSetails} value={resetDetails.phone} />
                </div>
                <button type="submit">Submit</button>
                <div className='bottom'>
                    <div className='bottom' onClick={() => {
                        object.swapForm(0)
                    }}>
                        <span>Go back</span>
                    </div>
                </div>
            </form>
            <DefaultSnackBar type={snackContent.type} message={snackContent.message} isOpen={snackContent.isOpen} handleClose={handleClose} />
        </>
    )
}

export default ForgetPassword
