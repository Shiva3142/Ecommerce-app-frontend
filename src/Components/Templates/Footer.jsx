import { Container, Grid } from '@mui/material'
import React from 'react'
import './Styles/Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EcommerceTag from './Assets/E-commerce-tag.svg';
function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} className='siteDesc'>
                            <div className="siteDesc">

                                <section>
                                    <img src={EcommerceTag} alt="" /> <h3>
                                        <span style={{ color: 'coral' }}>E-</span>Shop
                                    </h3>
                                </section>
                                <div className="decription">
                                    House My Brand designs clothing for the young, the old &everyone in between – but most importantly, for the fashionable
                                </div>
                                <div className="socialLinks">
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <LinkedInIcon />
                                    <InstagramIcon />
                                    <YouTubeIcon />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Grid container className='footerElement' spacing={2}>
                                <Grid item md={4}>
                                    <div className='footerDetails' >
                                        <h3>Shopping online</h3>
                                        <ul>
                                            <li>Order Status</li>
                                            <li>Shipping and Delivery</li>
                                            <li>Returns</li>
                                            <li>Payment Options</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item md={4}>
                                    <div className='footerDetails' >
                                        <h3>Information</h3>
                                        <ul>
                                            <li>Gift Cards</li>
                                            <li>Find a store</li>
                                            <li>Newsletter</li>
                                            <li>Bacome a member</li>
                                            <li>Site feedback</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item md={4}>
                                    <div className='footerDetails' >
                                        <h3>Contact</h3>
                                        <ul>
                                            <li>store@uikit.com</li>
                                            <li>Hotline: +1 131 138 138</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                    <div className='footerText'>
                        DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
                    </div>
            </footer>
        </>
    )
}

export default Footer
