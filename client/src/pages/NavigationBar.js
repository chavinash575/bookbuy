import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button' 
import { withRouter } from 'react-router-dom'

class NavigationBar extends React.Component {

    render() {

        return (
            <div>
                <Appbar position='static'>
                    <Toolbar>
                      <h1>Bookbuy</h1>
                      <br/>
                    <div id="nav">
                   <Button onClick={() => this.props.history.push('/')}>
                        Login
                    </Button>

                    <Button onClick={() => this.props.history.push('/register')}>
                        Register
                    </Button>
                    <Button onClick={() => this.props.history.push('/About')}>
                        About
                    </Button>
                    </div>  
                    </Toolbar>
                    </Appbar>

                    </div>
                    
                 )
                 
    }
    
}

export default withRouter(NavigationBar);