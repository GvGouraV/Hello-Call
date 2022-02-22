import React, { Component } from 'react';
import { AppBar, Collapse, Grid, TextField, Box, ListItemButton, ListItemIcon, ListItemText, List, ListItem, Divider, Toolbar, Typography, Button, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BsSpeedometer2 } from "react-icons/bs"
import { IoIosArrowUp } from "react-icons/io"
import { FiPhoneCall, FiUsers, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { connect } from "react-redux"
import { pushClick } from "../../actions"
import phone from "../SideBar/images/phone.png"
import callCenter from "../SideBar/images/call-centre.png";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Table from "../Table/callTable"
import MUIDataTable from "mui-datatables";
import EditCust from '../Customer/EditCust';
import CustManage from '../Customer/custManage';
import Table1 from "../Table/smsTable"
import CustomerTable from '../Customer/customerTable';
class Header extends Component {

    state = {
        right: false,
        logs: false,
        value: new Date(),
        datatableData: [
            ["in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K",],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["in", "call", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
            ["out", "call", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "+8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["in", "call", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["out", "call", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
            ["out", "call", "04 Apr 2021", "03:21:38 pm", "Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["in", "device", "04 Apr 2021", "03:21:38 pm", "Missed", "8272627282", "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Jacob K"],
            ["out", "device", "04 Apr 2021", "03:21:38 pm", "Not Connected", 8272627282, "+42 6353637372", "Kevin S", "+91 7383927384", "00:10:31", "Unknow"],
        ]
    }
    handlelogs = () => {
        let s1 = { ...this.state }

        if (s1.logs == true) {
            s1.logs = false
        } else {
            s1.logs = true
        }

        this.setState(s1)
    }
    handleClick = (index) => {
        let s1 = { ...this.state }
        this.props.dispatch(pushClick(index))
        this.toggleDrawer("left", false)
        this.setState(s1)
    }

    toggleDrawer = (anchor, open) => (event) => {
        let s1 = { ...this.state }
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log(s1.right)
        s1.right = open
        this.setState(s1);
    };


    list = (anchor, logs) => (
        <Box onMouseEnter={this.toggleDrawer(anchor, true)}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: 900, backgroundColor: "#1d3c77" }}
            role="presentation"
            onMouseLeave={this.toggleDrawer(anchor, false)}
            onKeyDown={this.toggleDrawer(anchor, false)}
        >
            <div className="mx-4 mt-4">
                <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-call-center-agent-sound-design-and-sound-production-flatart-icons-outline-flatarticons.png">
                </img>
                <span className=" text-secondary  " style={{ fontSize: "14px" }}>Switch to old Version</span>
            </div>
            <div className="mt-5 mx-4">
                <img src={phone} width="70" height="70"></img> <span style={{ color: "#93e6a6" }} className=" mx-1">Click to Call</span>
            </div>
            <List

                style={{ color: "white" }} onMouseEnter={this.toggleDrawer(anchor, true)}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <BsSpeedometer2 className="text-light" />
                    </ListItemIcon>
                    <ListItemText primary="DashBoard" />
                    <ListItemIcon>
                        <FiChevronRight className="text-light" />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <FiPhoneCall className="text-light" />
                    </ListItemIcon>
                    <ListItemText primary="Live Interactions" />
                    <ListItemIcon>
                        <FiChevronRight className="text-light" />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={this.handlelogs}>
                    <ListItemIcon>
                        <RiMailSendLine className="text-light" />
                    </ListItemIcon>
                    <ListItemText primary="Logs" />
                    <ListItemIcon>
                        {logs == false
                            ? <FiChevronDown className="text-light" />
                            : <IoIosArrowUp className="text-light" />}
                    </ListItemIcon>
                </ListItemButton>
                <Collapse in={logs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, mx: 6 }} onClick={() => this.handleClick(0)} >
                            <ListItemText primary="Call Logs" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, mx: 6 }}>
                            <ListItemText primary="SMS Logs" onClick={() => this.handleClick(1)} />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                        <FiUsers className="text-light" />
                    </ListItemIcon>
                    <ListItemText primary="Customer Management" onClick={() => this.handleClick(2)} />
                    <ListItemIcon>
                        <FiChevronRight className="text-light" />
                    </ListItemIcon>
                </ListItemButton>
            </List>

        </Box>
    );

    render() {
        let { right, logs, value, datatableData } = this.state
        let click = this.props.click
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="bg-light">
                    <Toolbar>
                        <Button color="inherit" >
                            <img width="50"
                                src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-call-center-agent-sound-design-and-sound-production-flatart-icons-outline-flatarticons.png">
                            </img></Button>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", mt: 1 }}>
                            Logs
                        </Typography>

                        <div>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <IconButton
                                        onClick={this.toggleDrawer(anchor, true)}
                                        size="large"
                                        edge="start"
                                        aria-label="menu"
                                        sx={{ mr: 2, color: "black" }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor={anchor}
                                        open={right}
                                        onClose={this.toggleDrawer(anchor, false)}
                                    >
                                        {this.list(anchor, logs)}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3} sx={{ mt: 0.2, borderBottom: "1px solid gray", pb: 2 }}>
                    <Grid item xs={3} sm={3} md={1} >
                        <Button className={"  " + click == 0 ? "bg-light" : ""} sx={click == 1 ? { color: "gray", fontSize: "11px" } : { color: "#6d1f8c", fontSize: "11px" }} onClick={() => this.handleClick(0)}>Call Logs</Button>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <Button className={"  " + click == 1 ? "bg-light" : ""} sx={click == 0 ? { color: "gray", fontSize: "11px" } : { color: "#6d1f8c", fontSize: "11px" }} onClick={() => this.handleClick(1)}>SMS Logs</Button>
                    </Grid>
                    <Grid item sm={6} xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                value={value}
                                onChange={(newValue) => {
                                    this.setState({ value: newValue });
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <Box sx={{ flexGrow: 1, backgroundColor: "#e0f5f0" }}>
                {click==0?<Table /> :click==1?<Table1 />:click==2?<CustomerTable/>:click==3?<CustManage/>:<EditCust/>}
                    <Grid container spacing={4} sx={{ mt: 1, pl: 4, color: "#735a8f" }}>
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

                </Box>
            </Box>
        );
    }
}
const mapStateToProps = (state) => {
    return { click: state.click }
}
export default connect(mapStateToProps)(Header);
