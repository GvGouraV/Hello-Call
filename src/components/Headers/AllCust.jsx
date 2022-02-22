import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from "../Table/callTable"
import Table1 from "../Table/smsTable"
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Grid from '@mui/material/Grid';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Typography } from '@mui/material';
import { IoIosRefresh } from "react-icons/io";
import { connect } from "react-redux"
import { pushClick } from "../../actions"
import Time from "../TimePicker/Time"
import Footer from "../Footer/footer"
import CustTable from '../Customer/customerTable';
class AllCust extends Component {
    state = {
        state: {
            left: false

        },
        value: new Date(),
    }

    handleClick = (val) => {
        let s1 = { ...this.state }
        this.props.dispatch(pushClick(val))
        this.setState(s1)
    }


    render() {
        let { state, value } = this.state
        let click = this.props.click
        return (
            <div >
                <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
                    <Grid container alignItems="left" spacing={2} sx={{ pt: 2, pl: 7, pb: 1 }}>
                        <Grid item xs={3} sm={3} md={2} >
                            <Button className="bg-light" sx={{ color: "#6d1f8c", fontSize: "11px" }}>Customers Management</Button>
                        </Grid>
                        <Grid item xs={3} md={1}>

                        </Grid>
                        <Grid item xs={0} md={6}>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ pt: '4px' }}>
                            <UserAvatar />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={0} md={10}>
                        </Grid>
                        <Grid item xs={0} md={2} textAlign="right" sx={{pb:2,pt:2,pr:2}}>
                            <Button variant="contained">Add Member</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, p: 8, backgroundColor: "#d5efe7" }}>
                    <CustTable />
                    <Footer />
                </Box>
            </div>
        );

    }

}
const mapStateToProps = (state) => {
    return { click: state.click }
}
export default connect(mapStateToProps)(AllCust);
