import React from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

class homepage extends React.Component{
    render(){
        return (
            <div>
            <h1> I am in Home Page </h1>
            <Button onClick = {() => this.props.history.push('/login')}> Logout </Button>
            </div>
        );
    }
}

export default withRouter(homepage);