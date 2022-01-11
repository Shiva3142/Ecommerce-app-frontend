import { Button, Grid } from '@mui/material';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaperImage from './Assets/paper.png'
import MaterialImage from './Assets/material.png'
import MaterialDesc from './Assets/mateialDesc.png'
function ProductDetails(object) {
    let [counter,updatecounter]=useState(1)
    let [size,updateSize]=useState("")
    console.log(object);
    return (
        <div className='productDetailsContainer'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className='ProductDetailsImageContainer'>
                        <img src={object.data.image} alt="" className="img1" />
                        <img src={object.data.image} alt="" className="img2" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='ProductDetailContainer'>
                        {
                            object.data.discount !== 0 ? (
                                <div className="dicountPercentage">SALE</div>
                            ) : (<></>)
                        }
                        <h2>{object.data.title}</h2>
                        <div className="priceDetails">
                            <div className="price">
                                {
                                    object.data.discount !== 0 ? (
                                        <>
                                            <span className="finalprice">
                                                ${object.data.finalPrice}
                                            </span>
                                            <span className="preFinalPrice">
                                                ${object.data.preFinalPrice}
                                            </span>
                                        </>
                                    ) : (<>
                                        <span>${object.data.finalPrice}</span>
                                    </>)
                                }
                            </div>
                            <span style={{ fontSize: "0.8em", letterSpacing: "2px", fontWeight: "500" }}>HOUSE MY BRAND</span>
                        </div>
                        <p style={{ margin: "30px 0 5px 0" }}>Color :</p>
                        <div className="colorrow">
                            <div className="checkBoxes">
                                <input type="radio" name="color" id="black" value="black" />
                                <label htmlFor="black" style={{ background: "black" }} ></label>
                            </div>
                            <div className="checkBoxes">
                                <input type="radio" name="color" id="#FFE3B7" value="#FFE3B7" />
                                <label htmlFor="#FFE3B7" style={{ background: "#FFE3B7" }}></label>
                            </div>
                            <div className="checkBoxes">
                                <input type="radio" name="color" id="#2900FF" value="#2900FF" />
                                <label htmlFor="#2900FF" style={{ background: "#2900FF" }}></label>
                            </div>
                            <div className="checkBoxes">
                                <input type="radio" name="color" id="white" value="white" />
                                <label htmlFor="white" style={{ background: "white" }}></label>
                            </div>
                        </div>
                        <p style={{ margin: "50px 0 5px 0" }}>Size :</p>
                        <select name="size" id="size" value={size} onChange={(event)=>{
                            updateSize(event.target.value)
                        }}>
                            <option value="">CHOOSE SIZE</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <p style={{ margin: "40px 0 5px 0" }}>Quantity :</p>
                        <div className="cartOption">
                            <div className="Counter">
                                <RemoveIcon style={{ fill: "gray" }} onClick={()=>{
                                    if(counter!==1){
                                        updatecounter(counter-1)
                                    }
                                }}/>
                                <span>{counter}</span>
                                <AddIcon onClick={()=>{
                                    if(counter!==100){
                                        updatecounter(counter+1)
                                    }
                                }}/>
                            </div>
                            <div className="addtocart">

                                <Button variant="contained">ADD TO CART</Button>
                                <div className="heartIButton">
                                    <FavoriteBorderIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <div className="descreiptionContainer">
                <div className="descriptionOptions">
                    <Button variant="outlined">Description</Button>
                    <Button variant="text">Reviews</Button>
                </div>
                <div className="descriptions">
                    <div className="description">
                        <img src={PaperImage} alt="" />
                        <h5>Details and product description</h5>
                        <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
                    </div>
                    <div className="description">
                        <img src={MaterialImage} alt="" />
                        <h5>Details and product description</h5>
                        <p>Body: 98% COTTON - 2% ELASTANE.</p>
                        <img style={{width:"200px"}} src={MaterialDesc} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
