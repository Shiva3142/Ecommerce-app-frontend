import React from 'react'
import '../../Styles/Templates/BasicProduct.scss'
function BasicProduct(object) {
    return (
        <div className='basicProduct'>
            <img src={object.image} alt="" />
            {
                object.discount ? (
                    <div className="dicountPercentage">{object.discountPercentage}%</div>
                ) : (<></>)
            }
            <div className="basicProductDescription">
                <p>{object.title}</p>
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

export default BasicProduct
