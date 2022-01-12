import { Container, Grid } from '@mui/material'
import React from 'react'
import Header from '../Templates/Header'
import CartData from './Assets/Data/cartData.json'
import CartProduct from './CartProducts'
import './Styles/Cart.scss'
import CartImage from '../Templates/Assets/Cart.svg'
import DeliveryVanIcon from '../Product/Assets/truck.svg'
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom'

function Cart() {
    return (
        <div className='CartpageContainer'>
            <Header />
            <hr />
            {
                JSON.stringify(CartData)
            }
            <Container>
                <div className="cartHeader">
                    <h2>Shopping Cart</h2>
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
                <div className="ScrollebleCartContainer">
                    <CartProduct />
                </div>
                <div className="CartPageFooter">
                    <NavLink to="/" className="backOption">
                        <ArrowBackIcon />
                        <p>
                            Continue Shopping
                        </p>
                    </NavLink>
                    <div className="checkoutoptions">
                        <div className="promocodeContainer">
                            <input type="text" name="id" id="code" placeholder='Promo Code' />
                            <button>
                                <SendIcon />
                            </button>
                        </div>
                        <div className="price">
                            <span>
                                Total cost
                            </span>
                            <span>
                                $159,98
                            </span>
                        </div>
                        <div>
                            <button>
                                <NavLink to="/checkout">
                                    CHECKOUT
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart