import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

function CartProductContainer() {
    let [counter, updatecounter] = useState(1)

    return (
        <>
            <Grid item xs={1} md={1}>
                <div className="cartItemImage">
                    <img src="/products/img1.png" alt="" />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="cartItemName">
                    <h3>
                        T-Shirt Summer Vibes
                    </h3>
                    <p>
                        #261311
                    </p>
                </div>
            </Grid>
            <Grid item xs={1} md={1}>
                <h4>
                    White
                </h4>
            </Grid>
            <Grid item xs={1} md={1}>
                <h4>
                    XL
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
                    $89.99
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
