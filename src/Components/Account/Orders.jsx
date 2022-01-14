import { Button } from '@mui/material'
import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import OrdersData from '../../Assets/Account/Data/ordersDetails.json'
import OrdersProduct from './OrdersProduct'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Orders() {
    let [orderPage, updateorderPage] = useState({
        isOrder: false,
        order: null
    })
    function setOrderPage(object) {
        console.log(object);
        updateorderPage({
            isOrder: true,
            order: object
        })
    }
    function showTracking(event) {
        let trackingContainer = document.getElementById('trackingContainer');
        if (trackingContainer.style.maxHeight === "0px") {
            trackingContainer.style.maxHeight = "1000px"
        } else {
            trackingContainer.style.maxHeight = "0px"
        }
    }
    return (
        <>
            <div className="ordersContainer">
                {
                    !orderPage.isOrder ? (
                        <>
                            <h3>Your Orders</h3>
                            <div className="orderContainer">
                                {
                                    OrdersData.map((value, index) => {
                                        return (
                                            <OrdersProduct key={index} data={value} serOrder={setOrderPage} />
                                        )
                                    })
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            <div onClick={() => {
                                updateorderPage({
                                    isOrder: false,
                                    order: null
                                })
                            }} className="backOption">
                                <ArrowBackIcon />
                                <span>
                                    back
                                </span>
                            </div>
                            <div className="orderDetails">
                                <h5>Order Details</h5>
                                <div className="primarydetails">
                                    <div className="image">
                                        <img src={orderPage.order.image} alt="" />
                                    </div>
                                    <h4>
                                        {orderPage.order.title}
                                    </h4>
                                    <div>price : <strong>${orderPage.order.finalPrice}</strong></div>
                                    <div>Number of Items : <strong>{orderPage.order.count}</strong></div>
                                    <div>
                                        Ordered on <strong>
                                            <span style={{ color: "coral" }}>{orderPage.order.date_of_order.slice(0, 15)}</span>
                                        </strong>
                                    </div>
                                    <div>
                                        {
                                            orderPage.order.date_of_delivery ? (<>
                                                Delivered on
                                                <strong> <span style={{ color: "coral" }}>{orderPage.order.date_of_delivery.slice(0, 15)}</span>
                                                </strong>
                                            </>) : (<>
                                                <span style={{ color: "coral" }}>
                                                    Yet to be delivered
                                                </span>
                                            </>)
                                        }
                                    </div>
                                </div>
                                <h5>Shipping Details</h5>
                                <div className='shippingDetails'>To <strong>{orderPage.order.Buyer_name}</strong></div>
                                <div className='shippingDetails'>Address :  <strong>{orderPage.order.Address}</strong></div>
                                <div className="trackingButton">
                                    <Button variant="contained" onClick={showTracking}>
                                        {
                                            orderPage.order.date_of_delivery?(
                                                <>
                                                See Tracking
                                                </>
                                            ):(
                                                <>
                                                Track Package
                                                </>
                                            )
                                        }
                                        
                                        
                                        </Button>
                                </div>
                                <div id="trackingContainer">
                                    <h5>Order Tracking</h5>
                                    <div className="tracking">

                                        <div className="trackingunit">
                                            <div className="field">
                                                <strong>
                                                    Ordered :
                                                </strong>
                                            </div>
                                            <div className="value lighttext">
                                                {orderPage.order.date_of_order}
                                                <div className='lighttext'>Your Order is successfully Placed</div>
                                            </div>
                                        </div>
                                        {
                                            orderPage.order.date_of_shipping ? (
                                                <>
                                                    <div className="trackingunit">
                                                        <div className="field">
                                                            <strong>
                                                                Shipping :
                                                            </strong>
                                                        </div>
                                                        <div className="value lighttext">
                                                            {orderPage.order.date_of_shipping}
                                                            <div className='lighttext'>Your Order is successfully Shippig From are End</div>
                                                        </div>
                                                        {
                                                            orderPage.order.messages_after_shiping && orderPage.order.messages_after_shiping.map((element, index) => {
                                                                return (
                                                                    <div key={index} className="lighttext">
                                                                        {element}
                                                                        <br />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )
                                        }
                                        {
                                            orderPage.order.out_of_delivery_date ? (<>
                                                <div className="trackingunit">
                                                    <div className="field">
                                                        <strong>
                                                            Out Of Delivery :
                                                        </strong>
                                                    </div>
                                                    <div className="value lighttext">
                                                        {orderPage.order.out_of_delivery_date}
                                                        <div className='lighttext'>Your Order is Out of Delivery</div>
                                                    </div>
                                                </div>
                                            </>) : (<>
                                            </>)
                                        }
                                        <div className="trackingunit">
                                            {
                                                orderPage.order.date_of_delivery ? (<>
                                                    <div className="field">
                                                        <strong>
                                                            Delivered :
                                                        </strong>
                                                    </div>
                                                    <div className="value lighttext">
                                                        {orderPage.order.date_of_order}
                                                        <div className='lighttext'>Your Order is successfully Delivered</div>
                                                    </div>
                                                </>) : (
                                                    <>
                                                        Please Wait till Delivery ..........
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Orders
