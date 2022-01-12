import React from 'react'

function CheckoutProduct({data}) {
    // console.log(data);
    return (
        <div className="product">
            <img src={data.image} alt="" />
            <div className="description">
                <h4>{data.title}</h4>
                <p>#{data.product_id}</p>
            </div>
            <div className="price">
                ${data.finalPrice}
            </div>
        </div>
    )
}

export default CheckoutProduct
