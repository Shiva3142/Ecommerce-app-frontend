import { Button } from '@mui/material'
import React, { useState } from 'react'
import userdetails from '../../Assets/Account/Data/userDetails.json'
import Countries from '../../Assets/Checkout/Data/countries.json'


function Profile() {
    let [address, updateaddress] = useState({
        address: "",
        pincode: "",
        city: "",
        country: "India",
    })
    let [phone,updatePhone]=useState("")

    function fillAddress(event) {
        updateaddress((prevalue) => {
            return ({
                ...prevalue,
                [event.target.name]: event.target.value
            })
        })
    }
    function toggleAddressForm(event) {
        let Addressform=document.getElementById('Addressform');
        if (Addressform.style.maxHeight==="0px") {
            Addressform.style.maxHeight="500px"
        } else {
            Addressform.style.maxHeight="0px"
            
        }
    }
    function togglePhoneUpdateForm(event) {
        let phoneInput=document.getElementById('phoneInput');
        if (phoneInput.style.maxHeight==="0px") {
            phoneInput.style.maxHeight="500px"
        } else {
            phoneInput.style.maxHeight="0px"
            
        }

    }
    return (
        <>
            <div className="profileContainer">
                <h3>
                    Profile Details
                </h3>
                <div className="detailContainer">
                    <span className="field">
                        Name :
                    </span>
                    <span className="value">
                        <strong>

                            {
                                userdetails.fname + " " + userdetails.lname
                            }
                        </strong>
                    </span>
                </div>
                <div className="detailContainer">
                    <span className="field">
                        Email :
                    </span>
                    <span className="value">
                        {
                            userdetails.email
                        }
                    </span>
                </div>
                <div className="detailContainer">
                    <span className="field">
                        Phone :
                    </span>
                    <span className="value">
                        {
                            userdetails.phone ? (<>
                                {userdetails.phone}
                            </>) : (<>
                                Phone is Not Updated Yet, Please Update
                            </>)
                        }
                    </span>
                    <span className='update' onClick={togglePhoneUpdateForm}>
                        update
                    </span>
                </div>
                <div id="phoneInput">

                    <div id="updatephone">
                        <input type="number" name="phone" id="phone" placeholder='Enter Phone Number' value={phone} onChange={(event)=>{
                            updatePhone(event.target.value)
                        }} />
                        <button>Update</button>
                    </div>
                </div>
                <h3 style={{ margin: "30px 0 10px 0" }}>
                    Addess Details
                </h3>
                <div className="detailContainer addressContainer">
                    {
                        userdetails.address ? (<>
                            Room No 407 Milan Homes Plot no 59 Sector 16E Roadpali Kalamboli 410218 Raigad Maharashtra
                        </>) : (<>
                            Address is Not Updated Yet, Please Update
                        </>)
                    }
                </div>
                <Button variant='outlined' className='updateAddressButton' onClick={toggleAddressForm}>Update Address</Button>
                <form id="Addressform">
                    <h4>Address Form</h4>
                    <textarea name="address" id="address" placeholder='Enter Your Address' rows={3}></textarea>
                    <input type="number" name="pincode" id="pincode" placeholder='Enter Pin/Zip Code' />
                    <input type="text" name="city" id="city" placeholder='Enter City' />
                    <select name="country" id="country" onChange={fillAddress} value={address.country}>
                        <option value="India">India</option>
                        {
                            Countries.map((element, index) => {
                                return (
                                    
                                        <option key={index} value={element.name}>{element.name}</option>
                                    
                                )
                            })
                        }
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Profile
