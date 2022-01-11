import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Grid, Slider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Styles/ProductsContainer.scss'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import Product from './Product';
import ProductData from './Assets/Data/ProductsData.json';

function ProductsContainer() {
    let [ProductsData, updateProductsData] = useState(ProductData);
    let [sortValue, updateSortValue] = useState(0);
    let [ProductCountValue, updateProductCountValue] = useState(10);
    let [productsValuePointer, updateproductsValuePointer] = useState(0)
    let [currentpage, updatecurrentpage] = useState(1)
    let [totalPages, updatetotalPages] = useState(Math.ceil(ProductsData.length / ProductCountValue))
    function updatecountOftheProductstoShow(event) {
        updatecurrentpage(1)
        updateProductCountValue(parseInt(event.target.value))
        updatetotalPages(Math.ceil(ProductsData.length / event.target.value))
        updateproductsValuePointer(0)
    }

    function goToTheNextProductsList(event) {
        if (currentpage >= totalPages) {
        } else {
            window.scrollTo(0,0)
            updateproductsValuePointer(productsValuePointer + ProductCountValue)
            updatecurrentpage(currentpage + 1)
        }
    }
    function goToTheBackProductsList(event) {
        if (currentpage === 1) {
        } else {
            window.scrollTo(0,0)
            updateproductsValuePointer(productsValuePointer - ProductCountValue)
            updatecurrentpage(currentpage - 1)
        }
    }

    function sortTheProducts(event) {
        updateSortValue(event.target.value);
        let data = ProductsData;
        if (parseInt(event.target.value) === 2) {
            console.log("decreasing sort");
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (data[i].finalPrice > data[j].finalPrice) {
                        let tempElement = data[i];
                        data[i] = data[j];
                        data[j] = tempElement;
                    }
                }
            }
        } else if (parseInt(event.target.value) === 1) {
            console.log("inceasing sort");
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (data[i].finalPrice < data[j].finalPrice) {
                        let tempElement = data[i];
                        data[i] = data[j];
                        data[j] = tempElement;
                    }
                }
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (data[i].numberOfBuys > data[j].numberOfBuys) {
                        let tempElement = data[i];
                        data[i] = data[j];
                        data[j] = tempElement;
                    }
                }
            }
        }
        updateProductsData(data);
        updateproductsValuePointer(0)
        updatecurrentpage(1)
    }

    let [priceValue, setValue] = useState([0, 500]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function toggleFilterWindow(object) {
        let filter = document.getElementsByClassName('filtersContainer')[0]
        if (filter.style.display === 'none') {
            filter.style.display = 'block'

        } else {
            filter.style.display = 'none'
        }
    }

    function applyTheFilters() {
        let type = document.getElementsByName('type')
        let collection = document.getElementsByName('collection')
        let size = document.getElementsByName('size')
        let color = document.getElementsByName('color')
        let minPrice = priceValue[0]
        let maxPrice = priceValue[1]
        let typeFilters = [], collectionFilters = [], sizeFilters = [], colorFilters = [];
        type.forEach(value => {
            if (value.checked === true) {
                typeFilters.push(value.value)
            }
        })
        collection.forEach(value => {
            if (value.checked === true) {
                collectionFilters.push(value.value)
            }
        })
        size.forEach(value => {
            if (value.checked === true) {
                sizeFilters.push(value.value)
            }
        })
        color.forEach(value => {
            if (value.checked === true) {
                colorFilters.push(value.value)
            }
        })
        let data = ProductData;
        let filteredData = []
        if (typeFilters.length === 0) {
            filteredData = data
        } else {
            data.forEach(value => {
                for (let index = 0; index < typeFilters.length; index++) {
                    if (value.type === typeFilters[index]) {
                        filteredData.push(value)
                    }
                }
            })
        }
        data = filteredData;
        filteredData = []
        if (collectionFilters.length === 0) {
            filteredData = data
        } else {
            data.forEach(value => {
                for (let index = 0; index < collectionFilters.length; index++) {
                    if (value.collection === collectionFilters[index]) {
                        filteredData.push(value)
                    }
                }
            })
        }
        data = filteredData;
        filteredData = []
        if (sizeFilters.length === 0) {
            filteredData = data
        } else {
            data.forEach(value => {
                for (let index = 0; index < sizeFilters.length; index++) {
                    if (value.size.indexOf(sizeFilters[index]) !== -1) {
                        filteredData.push(value)
                        break
                    }
                }
            })
        }
        data = filteredData;
        filteredData = []
        if (colorFilters.length === 0) {
            filteredData = data
        } else {
            data.forEach(value => {
                for (let index = 0; index < colorFilters.length; index++) {
                    console.log(value.color.indexOf(colorFilters[index]));
                    if (value.color.indexOf(colorFilters[index]) !== -1) {
                        filteredData.push(value)
                        break
                    }
                }
            })
        }
        data = filteredData;
        filteredData = []
        data.forEach(value => {
            if (value.finalPrice >= minPrice && value.finalPrice <= maxPrice) {
                filteredData.push(value)
            }
        })
        if (window.innerWidth < 900) {
            toggleFilterWindow('block')
        }
        updateProductsData(filteredData)
        updatecurrentpage(1)
        updatetotalPages(Math.ceil(filteredData.length / ProductCountValue))
        updateproductsValuePointer(0)
    }

    return (
        <>
            <Grid className='ProductsPageMainContainer' container spacing={5}>
                <div onClick={() => { toggleFilterWindow('block') }} className="filterhideandshow">Filter</div>
                <Grid className='filtersContainer' item xs={6} md={3}>
                    <div className="filterItemsContainer">
                        <ClearIcon id="hideNavBar" onClick={() => { toggleFilterWindow('none') }} />
                        <div className='filterItems'>
                            <h4>Filter</h4>
                            <Accordion className='filterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="productType"
                                >
                                    <Typography>Product Type</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="type" id="t-shirt" value="t-shirt" />
                                            <label htmlFor="t-shirt">T-Shirts (411)</label>
                                        </div>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="type" id="sweatshirt" value="sweatshirt" />
                                            <label htmlFor="sweatshirt">Sweatshirts (131)</label>
                                        </div>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="type" id="tank-top" value="tank-top" />
                                            <label htmlFor="tank-top">Tank Tops (56)</label>
                                        </div>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="type" id="dress-shirt" value="dress-shirt" />
                                            <label htmlFor="dress-shirt">Dress shirts (8)</label>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='filterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="price"
                                >
                                    <Typography>Price</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Box sx={{ width: 180, margin: "auto" }}>
                                            <Slider
                                                max={500}
                                                value={priceValue}
                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                marks={[{ value: 0, label: "0 USD" }, { value: 500, label: "500 USD" }]}
                                            />
                                        </Box>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='filterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="collection"
                                >
                                    <Typography>Collection</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="collection" id="summer" value="summer" />
                                            <label htmlFor="summer">Summer</label>
                                        </div>
                                        <div className="checkBoxes">
                                            <input type="checkbox" name="collection" id="winter" value="winter" />
                                            <label htmlFor="winter">Winter</label>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='filterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="size"
                                >
                                    <Typography>Size</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="sizerow">
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="size" id="XS" value="XS" />
                                                <label htmlFor="XS">XS</label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="size" id="S" value="S" />
                                                <label htmlFor="S">S</label>
                                            </div><div className="checkBoxes">
                                                <input type="checkbox" name="size" id="M" value="M" />
                                                <label htmlFor="M">M</label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="size" id="L" value="L" />
                                                <label htmlFor="L">L</label>
                                            </div><div className="checkBoxes">
                                                <input type="checkbox" name="size" id="XL" value="XL" />
                                                <label htmlFor="XL">XL</label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="size" id="XXL" value="XXL" />
                                                <label htmlFor="XXL">XXL</label>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='filterItem'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Color</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="colorrow">
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="color" id="black" value="black" />
                                                <label htmlFor="black" style={{ background: "black" }} ></label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="color" id="#6F3E18" value="#6F3E18" />
                                                <label htmlFor="#6F3E18" style={{ background: "#6F3E18" }}></label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="color" id="#D4BE8D" value="#D4BE8D" />
                                                <label htmlFor="#D4BE8D" style={{ background: "#D4BE8D" }}></label>
                                            </div><div className="checkBoxes">
                                                <input type="checkbox" name="color" id="#838383" value="#838383" />
                                                <label htmlFor="#838383" style={{ background: "#838383" }}></label>
                                            </div>
                                            <div className="checkBoxes">
                                                <input type="checkbox" name="color" id="white" value="white" />
                                                <label htmlFor="white" style={{ background: "white" }}></label>
                                            </div><div className="checkBoxes">
                                                <input type="checkbox" name="color" id="#0F73AD" value="#0F73AD" />
                                                <label htmlFor="#0F73AD" style={{ background: "#0F73AD" }}></label>
                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Button variant='outlined' onClick={applyTheFilters} style={{ margin: "30px auto" }}>Apply Filters</Button>
                        </div>
                    </div>
                </Grid>
                <Grid className='ProductsContainer' item xs={12} md={9}>
                    <div className='productsContainerHeader'>
                        <h3>Men's Tops (133)</h3>
                        <div className="prefilteroption">
                            <div className="productsNumberRestriction">
                                <label htmlFor="productsCount">Show Products:</label>
                                <select name="count" id="productsCount" onChange={updatecountOftheProductstoShow} value={ProductCountValue}>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                            <div className="sortingOfProducts">
                                <label htmlFor="sortBy">Sort:</label>
                                <select name="sortBy" value={sortValue} onChange={sortTheProducts} id="sortingOfProducts">
                                    <option value={0}>Populer</option>
                                    <option value={1}>Price Low to High</option>
                                    <option value={2}>Price High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ProductsList">
                        {
                            ProductData && ProductsData.map((value, index) => {
                                if (index >= productsValuePointer && index < (ProductCountValue + productsValuePointer)) {
                                    return (
                                        <Product key={index} id={value.id} image={value.image} title={value.title} price={value.finalPrice} discount={value.discount === 0 ? (false) : true} discountPercentage={value.discount} lastPrice={value.preFinalPrice} />
                                    )
                                } else {
                                    return (<></>)
                                }
                            })
                        }
                    </div>
                    {
                        ProductsData && ProductsData.length === 0 ? (
                            <div className="ProductsNotAvailable">
                                <Alert severity="warning">Sorry, Products are not avilable</Alert>
                            </div>
                        ) : (

                            <div className="Productspegination">
                                <span onClick={goToTheBackProductsList}>Back</span>
                                <div>
                                    Page <button variant="outlined">{currentpage}</button> <span>of  {totalPages}</span>
                                </div>
                                <span onClick={goToTheNextProductsList}>NEXT</span>
                            </div>
                        )
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsContainer
