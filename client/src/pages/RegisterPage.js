import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavigationBar from './NavigationBar'
import {withRouter} from 'react-router-dom';
import Axios from 'axios'
class RegistratioPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      password:''
    }
    this.handleRegisterClick = this.handleRegisterClick.bind(this)
  }

  async handleRegisterClick(){
    console.log("I am in handleclick");
   const {email, password} = this.state;
   try{
       const data = {email: email, password: password}
       const response = await Axios.post('/api/bfa', data);
       if(response.status === 200){
         alert('Registered Successfully');
         this.props.history.push('/');
       }
   }
   catch(error){
       console.log(error.message);
   }
  }

  render() {
    return (
    
      <div>
        <NavigationBar/>
        <MuiThemeProvider>
          <div>
          
          <h1 style={{color: "blue"}}>User Registration</h1>
        
           <TextField
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstname:newValue})}
             />
           
           <TextField
          
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             floatingLabelText="username"
             type="email"
             LabelText="username"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           
           <RaisedButton label="Register" 
           onClick = {this.handleRegisterClick}/> 
           
          </div>
         </MuiThemeProvider>
      </div>
    );
    
  }
  
}
export default withRouter(RegistratioPage);