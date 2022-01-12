import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import './Styles/Checkout.scss'
import Header from '../Templates/Header'
import Success from './Success'
import CartImage from '../Templates/Assets/Cart.svg'
import DeliveryVanIcon from '../Product/Assets/truck.svg'
import Countries from './Assets/Data/countries.json'
import PaypalIcon from './Assets/paypal.png'
import VisaIcon from './Assets/visa.png'
import CheckoutProduct from './CheckoutProduct'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom'

function Checkout() {
    let [checkoutSuccess, updatecheckoutSuccess] = useState(true)
    let [userdata, updateuserdata] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        city: "",
        country: "India",
    })
    function filluserdata(event) {
        updateuserdata((prevalue) => {
            return ({
                ...userdata,
                [event.target.name]: event.target.value
            })
        })
    }
    return (
        <div className='CheckoutCotainer'>
            <Header />
            <hr />
            <Container>
                {
                    checkoutSuccess ? (<>
                        <Success />
                    </>) : (
                        <>
                            <div className="CheckoutDetailsContainer">
                                <div className="cartHeader">
                                    <h2>Shipping and Payment</h2>
                                    <div className="cartHeaderProgress">
                                        <div className="cartstage">
                                            <img src={CartImage} alt="" />
                                        </div>
                                        <div className='line'></div>
                                        <div className="deliverystage">
                                            <img src={DeliveryVanIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkoutArea">
                                    <Grid container spacing={3} columns={12}>
                                        <Grid item xs={12} md={5}>
                                            <div className='contactForm'>
                                                <div className="signupInfo">
                                                    <button>LOG IN</button>
                                                    <button>SIGN UP</button>
                                                </div>
                                                <div className="shippingInfo">
                                                    <h4>Shipping Information</h4>
                                                    <div className="inputs">
                                                        <input type="email" name="email" id="email" placeholder='Email' onChange={filluserdata} value={userdata.email} />
                                                        <input type="text" name="address" id="address" placeholder='Address' onChange={filluserdata} value={userdata.address} />
                                                    </div>
                                                    <div className="inputs">
                                                        <input type="text" name="fname" id="fname" placeholder='First Name' onChange={filluserdata} value={userdata.fname} />
                                                        <input type="text" name="city" id="city" placeholder='City' onChange={filluserdata} value={userdata.city} />
                                                    </div>
                                                    <div className="inputs">
                                                        <input type="text" name="lname" id="lname" placeholder='Last name' onChange={filluserdata} value={userdata.lname} />
                                                        <input type="number" name="pincode" id="pincode" placeholder='Postal Code/Zip' onChange={filluserdata} value={userdata.pincode} />
                                                    </div>
                                                    <div className="inputs">
                                                        <input type="number" name="phone" id="phone" placeholder='Phone Number' onChange={filluserdata} value={userdata.phone} />
                                                        <select name="country" id="country" onChange={filluserdata} value={userdata.country}>
                                                            <option value="India">India</option>
                                                            {
                                                                Countries.map((element, index) => {
                                                                    return (
                                                                        <>
                                                                            <option key={index} value={element.name}>{element.name}</option>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <div className='PaymentOptionContainer'>
                                                <h4>Payment method</h4>
                                                <label htmlFor='paypal' className="paymentoption">
                                                    <input type="radio" name="payment" id="paypal" value="paypal" />
                                                    <img src={PaypalIcon} alt="" />
                                                    <span>WALLETS</span>
                                                </label>
                                                <label htmlFor='visa' className="paymentoption">
                                                    <input type="radio" name="payment" id="visa" value="visa" />
                                                    <img src={VisaIcon} alt="" />
                                                    <span>CARDS</span>
                                                </label>
                                                <label htmlFor='cod' className="paymentoption">
                                                    <input type="radio" name="payment" id="cod" value="cod" />
                                                    <img src={PaypalIcon} alt="" />
                                                    <span>COD</span>
                                                </label>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div className='ProductReviewContainer'>
                                                <h4>Your cart</h4>
                                                <div className="productsContainer">
                                                    <CheckoutProduct />
                                                    <CheckoutProduct />
                                                    <CheckoutProduct />
                                                </div>
                                                <div className="totalContainer">
                                                    <span>Total cost</span>
                                                    <span><strong>$159.98</strong></span>
                                                </div>
                                                <div className="freDeliverysection">
                                                    <img src={DeliveryVanIcon} alt="" />
                                                    <p>
                                                        You are $30,02 away from free shipping!
                                                    </p>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="CheckoutContainerFooter">
                                    <NavLink to="/cart" className="backOption">
                                        <ArrowBackIcon />
                                        <p>
                                            Back
                                        </p>
                                    </NavLink>
                                    <div className="checkoutButtons">
                                        <button>Continue shopping</button>
                                        <button>Proceed to payment</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default Checkout
