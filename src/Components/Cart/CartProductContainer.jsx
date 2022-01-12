import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

function CartProductContainer({data}) {
    let [counter, updatecounter] = useState(data.count)

    return (
        <>
            <Grid item xs={1} md={1}>
                <div className="cartItemImage">
                    <img src={data.image} alt="" />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="cartItemName">
                    <h3>
                        {data.title}
                    </h3>
                    <p>
                        #{data.product_id}
                    </p>
                </div>
            </Grid>
            <Grid item xs={1} md={1}>
                <h4>
                    {data.color}
                </h4>
            </Grid>
            <Grid item xs={1} md={1}>
                <h4>
                    {data.size}
                </h4>
            </Grid>
            <Grid item xs={2} md={2}>
                <div className="Counter">
                    <RemoveIcon style={{ fill: "gray" }} onClick={() => {
                        if (counter !== 1) {
                            updatecounter(counter - 1)
                        }
                    }} />
                    <span>{counter}</span>
                    <AddIcon onClick={() => {
                        if (counter !== 100) {
                            updatecounter(counter + 1)
                        }
                    }} />
                </div>
            </Grid>
            <Grid item xs={2} md={2}>
                <h4 style={{ textAlign: "center" }}>
                    ${data.finalPrice}
                </h4>
            </Grid>
            <Grid item xs={1} md={1}>
                <div className="clear">
                    <ClearIcon />
                </div>
            </Grid>
        </>
    )
}

export default CartProductContainer
