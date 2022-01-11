import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom';

function Product(object) {
    return (
        <div className='ProductContainer'>
            <div className="likeButton"><FavoriteBorderIcon /></div>
            <img src={object.image} alt="" />

            <div className="basicProductDescription">
                <p> <NavLink to={`/product/${object.id}`}> {object.title}</NavLink></p>
                <h3>
                    {
                        object.discount ? (
                            <>
                                <span style={{ color: "red" }}> ${object.price} </span>
                                <span style={{ color: "gray" }}> ${object.lastPrice} </span>
                            </>
                        ) : (
                            <>
                                ${object.price}
                            </>
                        )
                    }
                </h3>
            </div>
        </div>
    )
}

export default Product
