import { Button, Container } from '@mui/material'
import React from 'react'
import BasicProduct from '../Templates/BasicProduct'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function RecommendProducts() {
    function rightScroll(event) {
        let HorizontalscrollableContainer = document.getElementsByClassName('HorizontalscrollableContainer')[0]
        let leftScrollbtn = document.getElementById('leftScroll')
        let rightScrollbtn = document.getElementById('rightScroll')
        HorizontalscrollableContainer.scrollLeft = HorizontalscrollableContainer.scrollLeft + 310
        if (HorizontalscrollableContainer.scrollWidth - HorizontalscrollableContainer.scrollLeft < (HorizontalscrollableContainer.offsetWidth + 10)) {
            rightScrollbtn.style.fill = '#CECECE'
        }
        else {
            leftScrollbtn.style.fill = 'black'
        }
    }
    function leftScroll(event) {
        let HorizontalscrollableContainer = document.getElementsByClassName('HorizontalscrollableContainer')[0]
        let leftScrollbtn = document.getElementById('leftScroll')
        let rightScrollbtn = document.getElementById('rightScroll')
        HorizontalscrollableContainer.scrollLeft = HorizontalscrollableContainer.scrollLeft - 310
        if (HorizontalscrollableContainer.scrollLeft < 10) {
            leftScrollbtn.style.fill = '#CECECE'
        }
        else {
            rightScrollbtn.style.fill = 'black'
        }
    }
    return (
        <>
            <Container className="selectedProductsHeading">
                <h1>Selected just for you</h1>
                <Button variant="outlined">Show more</Button>
            </Container>
            <Container className="selectedProducts">
                <div className="homeleftscrollBar">
                    <Button ><ArrowBackIcon onClick={leftScroll} id="leftScroll" /></Button>
                </div>
                <div className='HorizontalscrollableContainer'>
                    <BasicProduct image="/products/img1.png" title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={30} lastPrice={119.99} />
                    <BasicProduct image="/products/img2.png" title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image="/products/img3.png" title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image="/products/img4.png" title={"Loose Textured T-Shirt"} price={119.99} />
                    <BasicProduct image="/products/img5.png" title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={30} lastPrice={119.99} />
                    <BasicProduct image="/products/img1.png" title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image="/products/img2.png" title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image="/products/img3.png" title={"Loose Textured T-Shirt"} price={119.99} />
                    <BasicProduct image="/products/img4.png" title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={30} lastPrice={119.99} />
                    <BasicProduct image="/products/img5.png" title={"Loose Knit 3/4 Sleeve"} price={119.99} />
                    <BasicProduct image="/products/img1.png" title={"Basic Slim Fit T-Shirt"} price={79.99} />
                    <BasicProduct image="/products/img3.png" title={"Loose Textured T-Shirt"} price={119.99} />
                </div>
                <div className="homeRightscrollBar">
                    <Button >< ArrowForwardIcon onClick={rightScroll} id="rightScroll" /></Button>
                </div>
            </Container>
        </>
    )
}

export default RecommendProducts
