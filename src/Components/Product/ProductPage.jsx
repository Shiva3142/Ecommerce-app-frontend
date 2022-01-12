import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecommendProducts from '../Home/RecommendProducts'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import NewsLetter from '../Templates/NewsLetter'
import './Styles/ProductPage.scss'
import ProductData from '../Products/Assets/Data/ProductsData.json';
import { Breadcrumbs, Container, Link } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ProductDetails from './ProductDetails'
import Truck from './Assets/truck.svg'
import Delivery from './Assets/delivery.svg'


function Product() {
    let { product_id } = useParams()
    let [productDetails, updateProductDetails] = useState(null)
    useEffect(() => {
        try {
            console.log("useeffect");
            for (let index = 0; index < ProductData.length; index++) {
                if (ProductData[index].id === parseInt(product_id)) {
                    updateProductDetails(ProductData[index])
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (<>
        <Container className='topHeader'>
            <span>
                Free shipment from $200
            </span>
            <span>
                FREE 30 DAY RETURNS ON YOUR ORDERS
            </span>
        </Container>
        <div className='ProductPageContainer'>
            <Header />
            <hr />
            {
                productDetails ? (<>
                    <Container style={{ margin: "40px auto" }}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="gray" href="/" >
                                <HomeOutlinedIcon style={{ fill: "gray", fontSize: "1.5em" }} />
                            </Link>
                            <Link
                                underline="hover"
                                color="gray"
                                aria-current="page"
                                href='/products' style={{ fontWeight: "lighter", fontSize: "0.7em" }}
                            >
                                {productDetails.category}'s Tops
                            </Link>
                            <Link
                                underline="hover"
                                color="black"
                                style={{ fontWeight: "bold", fontSize: "0.7em" }}
                                aria-current="page"
                            >
                                {productDetails.title}
                            </Link>
                        </Breadcrumbs>
                        <div className="productinitialHeader">
                            <div className="initialProductdetails">
                                <img src={Truck} alt="" />
                                <div className="ProductdetailsText">
                                    <h4>
                                        Standard Shipment
                                    </h4>
                                    <p>
                                        Free within 3-6 business days
                                    </p>
                                </div>
                            </div>
                            <div className="initialProductdetails">
                                <img src={Delivery} alt="" />
                                <div className="ProductdetailsText">
                                    <h4>
                                        Express delivery
                                    </h4>
                                    <p>
                                        at $35,00 available
                                    </p>
                                </div>
                            </div>
                            <div className="initialProductdetails">
                                <div className="ProductdetailsText">
                                    <h4>
                                        Product ID
                                    </h4>
                                    <p>
                                        {
                                            product_id
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* {JSON.stringify(productDetails)} */}
                    </Container>

                    <Container>
                        <ProductDetails data={productDetails} />
                    </Container>
                </>) : (<></>)
            }
            <RecommendProducts />
            <NewsLetter />
            <Footer />

        </div>
    </>
    )
}

export default Product
