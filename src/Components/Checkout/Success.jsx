import React, { useState } from 'react'
import SuccessImage from './Assets/success.png'
import CheckoutProduct from './CheckoutProduct'
import './Styles/Success.scss'
import CartImage from '../Templates/Assets/Cart.svg'
import DeliveryVanIcon from '../Product/Assets/truck.svg'
function Success({ CartData, totalAmount }) {
    return (
        <>
            <div className="successPage">

                <div className="CheckoutSuccessContainer">
                    <div className='SuccessImage'>
                        <img src={SuccessImage} alt="" />
                    </div>
                    <div className="summery">
                        <div className="HeaderProgress">
                            <div className="cartstage">
                                <img src={CartImage} alt="" />
                            </div>
                            <div className='line'></div>
                            <div className="deliverystage">
                                <img src={DeliveryVanIcon} alt="" />
                            </div>
                        </div>
                        <div className='ProductReviewContainer'>

                            <h4>Order Summery</h4>
                            <div className="productsContainer">
                                {
                                    CartData && CartData.length !== 0 ? (<>
                                        {
                                            CartData.map((value, index) => {
                                                return (
                                                    <CheckoutProduct key={index} data={value} />
                                                )
                                            })
                                        }
                                    </>) : (
                                        <>
                                        </>
                                    )
                                }
                            </div>
                            <div className="freeshippingInfo">
                                You were $30.02 away from free shopping
                                {
                                    totalAmount < 200 ? (
                                        <>
                                            You were ${200 - totalAmount.toFixed(2)} away from free shipping!

                                        </>
                                    ) : (
                                        <>
                                            You are eligible for free shipping!
                                        </>
                                    )
                                }
                            </div>
                            <div className="price">
                                <span>Total cost</span>
                                <span>
                                    <strong>${totalAmount.toFixed(2)}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="successContainerFooter">

                    <h4>
                        A warm thank you from TEQUILA T-SHIRTS, we hope you will love the tshirts order again from US
                    </h4>
                    <div className="checkoutButtons">
                        <button>Continue shopping</button>
                        <button>Track ORDER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success
