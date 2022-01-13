import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import '../../Styles/Templates/NewsLetter.scss'

function NewsLetter() {
    return (
        <>
            <Container className='newdLetterContainer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <section>
                            <h1>
                                Subscribe to our newsletter and recieve exclusive offers every week
                            </h1>
                        </section>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className="subscribeButton">
                            <input type="email" name="email" id="email" placeholder='Enter your Email' />
                            <Button variant="contained">Subscribe</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default NewsLetter
