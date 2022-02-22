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
import CustTable from '../Customer/customerTable';
class SMSLogs extends Component {
    state = {
        state: {
            left: false

        },
        click: 0,
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
                        <Grid item xs={3} sm={3} md={1} >
                            <Button className="" sx={{ color: "gray", fontSize: "11px" }} onClick={() => this.handleClick(0)}>Call Logs</Button>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Button className="bg-light" sx={{ color: "#6d1f8c", fontSize: "11px" }} onClick={() => this.handleClick(1)}>SMS Logs</Button>
                        </Grid>
                        <Grid item xs={0} md={7}>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ pt: '4px' }}>
                            <UserAvatar />
                        </Grid>
                    </Grid>
                    <Time />
                </Box>
                <Box sx={{ flexGrow: 1, p: 6, backgroundColor: "#d5efe7" }}>



                    <Table1 />

                    <Grid container spacing={2} sx={{ pt: 4 }}>
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

                    </Grid>
                </Box>
            </div>
        );

    }

}
const mapStateToProps = (state) => {
    return { click: state.click }
}
export default connect(mapStateToProps)(SMSLogs);
