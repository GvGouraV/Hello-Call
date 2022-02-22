import React ,{Component} from "react"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Typography } from '@mui/material';
import { IoIosRefresh } from "react-icons/io";
import Grid from '@mui/material/Grid';
class Time extends Component{
  state={ value: new Date(),}

    render(){
        let {value} = this.state


        return( <Grid container spacing={2} sx={{ pt: 2 }}>
            <Grid item xs={1} md={1}>

            </Grid>
            <Grid item xs={7} md={7}>

            </Grid>
            <Grid item xs={1} md={1}>
                <Typography sx={{ fontSize: '30px', mx: 6 }}><IoIosRefresh /></Typography>
            </Grid>
            <Grid item xs={3} md={3} sx={{ pb: 2 }} >
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
        </Grid>)
    }
}
export default Time;