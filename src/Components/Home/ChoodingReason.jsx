import { Container, Grid } from '@mui/material'
import React from 'react'
import './Styles/ChoodingReason.scss'
import Garentee from './Assets/garentee.svg'
import Quality from './Assets/quality.svg'
import Payment from './Assets/payment.svg'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function ChoodingReason() {
    return (
        <Container>
            <Grid container className='reasons' spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="reasons ">
                        <LocalShippingOutlinedIcon />
                        <h3>
                            Free Shipping
                        </h3>
                        <p>
                            All purchases over $199 are eligible for free shipping via USPS First Class Mail.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="reasons ">
                        <img src={Payment} style={{ background: "#FFF3DF" }} alt="" />
                        <h3>
                            Easy Payments
                        </h3>
                        <p>
                            All payments are processed instantly over a secure payment protocol.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="reasons ">
                        <img src={Garentee} style={{ fill: "#fbb13be7" }} alt="" />
                        <h3>
                            Money-Back Guarantee
                        </h3>
                        <p>
                            If an item arrived damaged or you've changed your mind, you can send it back for a full refund.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="reasons ">
                        <img src={Quality} alt="" />
                        <h3>
                            Finest Quality
                        </h3>
                        <p>
                            Designed to last, each of our products has been crafted with the finest materials.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChoodingReason
