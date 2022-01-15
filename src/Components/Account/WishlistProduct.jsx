import React from 'react'
import { NavLink } from 'react-router-dom'

function WishlistProduct({data}) {
    return (
        <NavLink to={`/product/${data.product_id}`} className="order">
            <img src={data.image} alt="" />
            <div className="info">
                <h4>{data.title}</h4>
            </div>
        </NavLink>
    )
}

export default WishlistProduct
