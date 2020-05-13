import React from 'react';
import NavigationBar from './pages/NavigationBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import homepage from './pages/homepage'
import bookpage from './pages/bookpage';
import deliverypage from './pages/deliverypage';
import About from './pages/About';
import Printaddress from './pages/Printaddress';


class App extends React.Component {

  render() {
  

    return (

      <div className="App">
        <Router>

          <div>


            <Switch>
             <Route exact path = "/about" exact strict component = {About}/>
              <Route  exact path="/" exact strict component = {LoginPage} />
              <Route  exact path="/register" exact strict component = {RegisterPage } />             
              <Route   exact path = "/homepage" exact strict component = {homepage}/>
              <Route  exact path = "/bookpage" exact strict component = {bookpage}/>
              <Route exact path = "/delivery" exact strict component = {deliverypage}/>
              <Route  exact path = "/printaddress" exact strict component = {Printaddress}/>
              
            </Switch>
          </div>
        </Router>
        </div>
      
    );
  }
}

export default App;
