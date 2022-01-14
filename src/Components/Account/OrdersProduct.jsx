import { Button } from '@mui/material'
import React from 'react'

function OrdersProduct({ data, serOrder }) {
    // console.log(data);
    return (
        <>
            <div className="order" onClick={() => {
                serOrder(data)
            }}>
                <img src={data.image} alt="" />
                <div className="info">
                    <h4>{data.title}</h4>
                    {
                        data.date_of_delivery ? (
                            <>
                                Delivered on <span style={{ color: "chocolate" }}>{data.date_of_delivery.slice(0, 15)}</span>

                            </>
                        ) : (
                            <>
                                Ordered on <span style={{ color: "coral" }}>{data.date_of_order.slice(0, 15)}</span>
                            </>
                        )
                    }
                    <div>
                        <Button variant='outlined'>
                            {
                                data.date_of_delivery ? (
                                    <>
                                        See Tracking
                                    </>
                                ) : (
                                    <>
                                        Track Package
                                    </>
                                )
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrdersProduct
