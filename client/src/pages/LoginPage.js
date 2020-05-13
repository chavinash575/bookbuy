import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {withRouter} from 'react-router-dom';

import Axios from 'axios';
import NavigationBar from './NavigationBar';


class LoginPage extends React.Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
  this.handleAuthUser = this.handleAuthUser.bind(this);
 }

 async handleAuthUser(){
  const {email, password} = this.state;
  let response
  const data = {
      email: email,
      password: password
  }
  try{
  const response = await Axios.post('/api/auth', data);
   if(response.status === 200){
    this.props.history.push('/bookpage', {username: email});
  }
  else if(response.status === 400) {
      alert("Username/Password Invalid")
  }
  }
  catch(error){
      alert("Username/Password Invalid");
  }
  // console.log(username,password);
}


render() {
    return (
      
      <div>
       <NavigationBar/>
        <MuiThemeProvider>
          <div>
          <h1 style={{color: "blue"}}> Login</h1>
           <TextField
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="submit" onClick = {this.handleAuthUser}> </RaisedButton>
             
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(LoginPage)
