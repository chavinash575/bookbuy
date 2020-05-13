import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Homenav from './Homenav'
import Button from '@material-ui/core/Button';
import Axios from 'axios'


class deliverypage extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastname: '',
      street: '',
      city: '',
      zipcode: '',
    }
    this.handledelivery = this.handledelivery.bind(this);
    this.fnamechange = this.fnamechange.bind(this);
    this.lnamechange = this.lnamechange.bind(this);
    this.streetchange= this.streetchange.bind(this);
    this.citychange = this.citychange.bind(this);
    this.zipchange = this.zipchange.bind(this);
  }
  async handledelivery(){
    const name = this.props.location.state.uname;
    const {firstname, lastname, street, city, zipcode} = this.state;
    console.log("The values of the form are:   ")
    console.log(firstname)
    console.log(lastname)
    console.log(street)
    console.log(city)
    console.log(zipcode)
    const orderobj = {
      firstname: firstname,
      lastname: lastname,
      street: street,
      city: city,
      zipcode: zipcode,
      username: name
    }
    const response = await Axios.post('/app/order', orderobj)
    console.log("The response of the status is: "+ response.status)
    if(response.status === 200){
      
    alert('Your order is placed');
    this.props.history.push('/bookpage');
    }
    else {
      console.log("Some problem in placing order");
    }
  }
  fnamechange(event){
    this.setState({firstname: event.target.value})
  }
  lnamechange(event){
    this.setState({lastname: event.target.value})
  }
  streetchange(event){
    this.setState({street: event.target.value})
  }
  citychange(event){
    this.setState({city: event.target.value})
  }
  zipchange(event){
    this.setState({zipcode: event.target.value})
  }
  
    render(){
      const {firstname, lastname, street, city, zipcode} = this.state
    return (
    <React.Fragment>
      <Homenav/>
      <Typography>
      <h1 style={{color: "blue"}}>Shipping Address</h1>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value = {firstname}
            onChange = {this.fnamechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value = {lastname}
            onChange = {this.lnamechange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address for delivery"
            fullWidth
            autoComplete="billing address-line1"
            value = {street}
            onChange = {this.streetchange}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            value = {city}
            onChange = {this.citychange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            value = {zipcode}
            onChange = {this.zipchange}
          />
        </Grid>
      </Grid>
      <button onClick = {this.handledelivery}>submit</button>
    </React.Fragment>
  );
}
}

export default deliverypage;