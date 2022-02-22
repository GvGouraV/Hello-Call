import React, { Component } from "react"
import { IoCall, IoChevronDownSharp } from "react-icons/io5";
import {GrSearch} from "react-icons/gr";
import { Button, Grid, Box, Typography, Badge, Avatar, Stack } from '@mui/material';
import { SmallAvatar, StyledBadge } from "./styles"
class UserAvtar extends Component {


  render() {

    return (
      <Box component="span">
        <Grid container spacing={5} >
          <Grid item xs={5} md={3} sx={{mx:4}} >
            <Button size="small" sx={{ color: 'gray',mx:5, border: '1px solid gray', height: 38 }}>
              <Typography sx={{ fontSize: 25, color: "lightgreen", pl: 0.5 }}>
                <IoCall />  </Typography>
              <Typography sx={{ pl: 0.5, fontSize: 22, pr: 0.5 }}><IoChevronDownSharp /></Typography></Button>
          </Grid>
          <Grid  item xs={2} md={2}>
            <Button sx={{  fontSize: 22,color:"lightgray" }}><GrSearch/></Button>
          </Grid>
          <Grid item xs={5} md={3}>
            <Button sx={{ mt: '-6px'}}>
              <Stack direction="row" spacing={2}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" variant="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ztEJbEMIJYKWeHfPmQlsO9YvzCnYGAKewQ&usqp=CAU" />
                </StyledBadge>
              </Stack>
              <Typography sx={{ pl: 1, fontSize: 22, pr: 0.5 }}><IoChevronDownSharp /></Typography></Button>
          </Grid>

        </Grid>
      </Box>
    )


  }
}

export default UserAvtar;