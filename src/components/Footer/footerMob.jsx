import React, { Component } from "react"
import { Box,Grid,Button } from '@mui/material';
class FooterMob extends Component {

    render() {
        return (<Box><Grid container spacing={4} sx={{ mt: 1, pl: 4, color: "#735a8f" }}>
            <Grid item xs={4} md={4} >
                <Typography variant="body1">About</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
                <Typography variant="body1">FAQs</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
                <Typography variant="body1">Contact</Typography>
            </Grid>
        </Grid>
            <Grid container sx={{ fontSize: "1px", pb: 2, pl: 8, pt: 3 }} >
                <Grid item xs={1} md={1} >
                    <Typography sx={{ color: "gray", fontSize: "11px", }}>@2021</Typography>
                </Grid>
                <Grid item xs={11} md={11}  >
                    <Typography sx={{ fontSize: "11px", pl: 2, color: "#735a8f" }}>Super Receptionist. Prowered by Knowlarity.</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Typography sx={{ fontSize: "11px", pl: 18, color: "gray" }}>All Rights Reserved</Typography>
            </Grid>
            </Box>)
    }
}
export default FooterMob