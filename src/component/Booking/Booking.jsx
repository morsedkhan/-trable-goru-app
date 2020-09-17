import React from 'react';
import { Link, useParams } from 'react-router-dom';
import places from '../../fakeData/place-description';
import {Container} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { InputLabel, TextField } from '@material-ui/core';
import './Booking.css';
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:150,
    },
    
  }));


const Booking = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
    setSelectedDate(date);
    };

    const classes = useStyles();
    const {imageId}=useParams();
    const place=places.find(place=>place.id===imageId);
    return (
        <div className={classes.root}>
        <Container >
       <Grid container spacing={2}>
         <Grid item xs={12} sm={12} md={5}>
           <div>
               <h3 className="title">{place.name}</h3>
               <p className="description">{place.fullDescription}</p>
               
           </div>
         </Grid>
         <Grid item xs={12} sm={12} md={5}>
             <form className="bookingForm" noValidate autoComplete="off">
             <InputLabel style={{marginTop:4}} htmlFor="outlined-full-width">Origin
             < TextField
           id="outlined-full-width"
           
           
           value="DHAKA"
           fullWidth
           margin="normal"
           InputLabelProps={{
             shrink: true,
           }}
           variant="outlined"
         /></InputLabel>
             
         <InputLabel htmlFor="outlined-full-width">Destination
         < TextField
           id="outlined-full-width"
           
           value={place.name}
           fullWidth
           margin="normal"
           InputLabelProps={{
             shrink: true,
           }}
           variant="outlined"
         /></InputLabel>
         
                 <Grid container spacing={6}>
                     <Grid item xs={12} sm={12} md={5}> 
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <Grid container justify="space-around">
         
                             <KeyboardDatePicker
                                 margin="normal"
                                 id="date-picker-dialog"
                                 label="From"
                                 format="MM/dd/yyyy"
                                 value={selectedDate}
                                 onChange={handleDateChange}
                                 KeyboardButtonProps={{
                                     'aria-label': 'change date',
                                 }}
                             />
        
                         </Grid>
                     </MuiPickersUtilsProvider>
                     </Grid> 
                     <Grid item xs={12} sm={12} md={5}> 
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <Grid container justify="space-around">
         
                             <KeyboardDatePicker
                                 margin="normal"
                                 id="date-picker-dialog"
                                 label="To"
                                 format="MM/dd/yyyy"
                                 value={selectedDate}
                                 onChange={handleDateChange}
                                 KeyboardButtonProps={{
                                     'aria-label': 'change date',
                                 }}
                             />
        
                         </Grid>
                     </MuiPickersUtilsProvider>
                     </Grid> 
                 </Grid>
                 <Link to="/login" className='btn btn-warning bookingButton'>Start Book Now</Link>
 
             </form>
             
           
         </Grid>
         
       </Grid>
       </Container>
       
     </div>
    );
};

export default Booking;