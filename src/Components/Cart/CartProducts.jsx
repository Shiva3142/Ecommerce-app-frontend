import React, { useState } from 'react'

import { Grid } from '@mui/material';
import CartProductContainer from './CartProductContainer';

function CartProducts() {
    return (
        <>
            <div className='CartProductContainer'>
                <Grid container spacing={[0]} columns={{ xs: 12, md: 12 }} style={{marginTop:"0",width:"100%",marginLeft:"0px"}}>
                    <Grid item xs={5} md={5} >
                        <div style={{color:"#C1C1C1"}}>Product</div>
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <div style={{color:"#C1C1C1"}}>Color</div>
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <div style={{color:"#C1C1C1"}}>Size</div>
                    </Grid>
                    <Grid item xs={2} md={2} >
                        <div style={{textAlign:"center",color:"#C1C1C1"}}>Count</div>
                    </Grid>
                    <Grid item xs={2} md={2} >
                        <div style={{textAlign:"center",color:"#C1C1C1"}}>Price</div>
                    </Grid>
                    <Grid item xs={1} md={1}>
                    </Grid>
                    <CartProductContainer/>
                    <CartProductContainer/>
                    <CartProductContainer/>
                </Grid>
            </div>

        </>
    )
}

export default CartProducts
