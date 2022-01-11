import { Breadcrumbs, Container, Link } from '@mui/material'
import React from 'react'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import NewsLetter from '../Templates/NewsLetter'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ProductsContainer from './ProductsContainer'


function Products() {
    return (
        <>
            <div className="ProductsPageContainer">
                <Header />
                <Container style={{ margin: "30px auto" }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            <HomeOutlinedIcon />
                        </Link>
                        <Link
                            underline="hover"
                            color="text.primary"
                            aria-current="page"
                        >
                            All Products
                        </Link>
                    </Breadcrumbs>
                </Container>
                <Container>
                    <ProductsContainer />
                </Container>

                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}

export default Products
