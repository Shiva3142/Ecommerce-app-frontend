import { Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import NewsLetter from '../Templates/NewsLetter'
import './Styles/HomePage.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Garentee from './Assets/garentee.svg'
import Happy from './Assets/happy.svg'
import BasicProduct from '../Templates/BasicProduct'
import Image1 from './Assets/products/img1.png'
import Image2 from './Assets/products/img2.png'
import Image3 from './Assets/products/img3.png'
import Image4 from './Assets/products/img4.png'
import Arrivals from './Arrivals'
import ChoodingReason from './ChoodingReason'


function HomePage() {
    useEffect(() => {
        document.title = "Home"
    }, [])
    function rightScroll(event) {
        let HorizontalscrollableContainer=document.getElementsByClassName('HorizontalscrollableContainer')[0]
        let leftScrollbtn=document.getElementById('leftScroll')
        let rightScrollbtn=document.getElementById('rightScroll')
        HorizontalscrollableContainer.scrollLeft=HorizontalscrollableContainer.scrollLeft+310
        if (HorizontalscrollableContainer.scrollWidth-HorizontalscrollableContainer.scrollLeft<(HorizontalscrollableContainer.offsetWidth+10)) {
            rightScrollbtn.style.fill='#CECECE'
        }
        else{
            leftScrollbtn.style.fill='black'
    
        }
    }
    function leftScroll(event) {
        let HorizontalscrollableContainer=document.getElementsByClassName('HorizontalscrollableContainer')[0]
        let leftScrollbtn=document.getElementById('leftScroll')
        let rightScrollbtn=document.getElementById('rightScroll')
        HorizontalscrollableContainer.scrollLeft=HorizontalscrollableContainer.scrollLeft-310
        if (HorizontalscrollableContainer.scrollLeft<10) {
            leftScrollbtn.style.fill='#CECECE'
        }
        else{
            rightScrollbtn.style.fill='black'

        }
        
    }




    return (
        <>
            <div className="HomeContainer">
                <Header />
                <Container className='homeHeadingContainer'>
                    <div className="homeheading">
                        <h1>Sale of the summer collection</h1>
                    </div>
                    <div className="shopButton">
                        <button><ArrowForwardIcon /></button>
                        <span>SHOP HERE</span>
                    </div>
                </Container>
                <Grid className='homeFeatures' container spacing={2}>
                    <Grid className="homeFeaturesContainer" item md={9} sm={12}>
                        <section className="features">
                            <div className="feature">
                                <div>
                                    <LocalShippingOutlinedIcon />
                                </div>
                                <div className="featuredetails">
                                    <h3>Free Shipping</h3>
                                    <p>On purchases over $199</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div>
                                    <img src={Happy} alt="" />
                                </div>
                                <div className="featuredetails">
                                    <h3>99% Satisfied Customers</h3>
                                    <p>Our clients' opinions speak for themselves</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div>
                                    <img src={Garentee} alt="" />
                                </div>
                                <div className="featuredetails">
                                    <h3>Originality Guaranteed</h3>
                                    <p>30 days warranty for each product from our store</p>
                                </div>
                            </div>
                        </section>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <div className="homeArrows">
                            <Button variant="outlined"><ArrowBackIcon /></Button>
                            <Button variant="contained">< ArrowForwardIcon /></Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Arrivals />
            <Container className="selectedProductsHeading">
                <h1>Selected just for you</h1>
                <Button variant="outlined">Show more</Button>
            </Container>
            <Container className="selectedProducts">
                <div className="homeleftscrollBar">
                    <Button ><ArrowBackIcon onClick={leftScroll} id="leftScroll" /></Button>
                </div>
                <div className='HorizontalscrollableContainer'>
                    <BasicProduct image={Image3} title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={119.99} lastPrice={119.99} />
                    <BasicProduct image={Image4} title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image={Image1} title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image={Image2} title={"Loose Textured T-Shirt"} price={119.99} />
                    <BasicProduct image={Image3} title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={119.99} lastPrice={119.99} />
                    <BasicProduct image={Image4} title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image={Image1} title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image={Image2} title={"Loose Textured T-Shirt"} price={119.99} />
                    <BasicProduct image={Image3} title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={119.99} lastPrice={119.99} />
                    <BasicProduct image={Image4} title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image={Image1} title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image={Image2} title={"Loose Textured T-Shirt"} price={119.99} />
                </div>
                <div className="homeRightscrollBar">
                    <Button >< ArrowForwardIcon onClick={rightScroll} id="rightScroll"/></Button>
                </div>
            </Container>
            <h1 className='centeredheading'>Why should you choose us?</h1>
            <ChoodingReason />
            <h1 className='centeredheading'>Products in today</h1>
            <div className="productsForTodayContainer">
                <BasicProduct image={Image1} title={"Basic Slim Fit T-Shirt"} price={79.99} />
                <BasicProduct image={Image2} title={"Loose Textured T-Shirt"} price={119.99} />
                <BasicProduct image={Image3} title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={119.99} lastPrice={119.99} />
                <BasicProduct image={Image4} title={"Loose Knit 3/4 Sleeve"} price={119.99} />
            </div>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default HomePage
