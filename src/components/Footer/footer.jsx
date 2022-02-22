import React, { Component } from "react"
import { Box,Grid,Button,Typography } from '@mui/material';
class Footer extends Component {

    render() {
        return (<Grid container spacing={2} sx={{ pt: 4 }}>
            <Grid item xs={6} md={6}>
                <Grid container spacing={6}>
                    <Grid item xs={1} md={1}>
                        <Typography variant="body1" sx={{ color: "gray" }}>@2021</Typography>
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Typography variant="body1">Super Receptionist. Prowered by Knowlarity.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
            </Grid>
            <Grid item xs={3} md={3}>
                <Grid container spacing={5}>
                    <Grid item xs={4} md={4}>
                        <Typography variant="body1">About</Typography>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Typography variant="body1">FAQs</Typography>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Typography variant="body1">Contact</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>)

    }
}
export default Footer