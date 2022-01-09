import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import './Styles/Arrivals.scss'

function Arrivals() {
    return (
        <Container style={{margin:"50px auto"}}>
            <Grid container className='ArrivalContainer' spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="arrival arrivals">
                        <h1>New Arrivals are in!</h1>
                        <Button variant="contained">SHOW COLLECTION</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="arrival basics">
                        <h1>Basic t-shirts at $29.99</h1>
                        <Button variant="contained">MORE DETAILS</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div className="arrival salenav">
                        <h1>Sale this summer</h1>
                        <Button variant="contained">VIEW ALL</Button>
                    </div>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Arrivals
