import React from 'react'
import Button from '@material-ui/core/Button' 
import {withRouter} from 'react-router-dom';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
class Homenav extends React.Component{
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this);
        this.bookingPage = this.bookingPage.bind(this);
        
    }
    logout(){
        this.props.history.push('/')
      }
      bookingPage(){
        this.props.history.push('/bookpage') 
      }
     
render(){
    return(
        <div>
        <Appbar position='static'>
        <Toolbar>
        <Button  onClick = {this.logout}> Logout </Button>
        <Button  onClick = {this.bookingPage}> Bookings </Button>
       
        </Toolbar>
        </Appbar>
        </div>
    );
}
}
export default withRouter(Homenav);