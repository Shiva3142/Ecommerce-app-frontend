import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import NewsLetter from '../Templates/NewsLetter'
import './Styles/ProductPage.scss'
function Product() {
    let {product_id}=useParams()
    return (
        <div className='ProductPageContainer'>
            <Header />
{
    product_id
}

            <NewsLetter />
            <Footer />

        </div>
    )
}

export default Product
