
import React from 'react';
import NavigationBar from './NavigationBar';

class About extends React.Component {
    render() {
        return (
          
            <div className="row">
              <NavigationBar/>
              <div className="logo">
                <img src='https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width="400" height="300" />
              <br/>
              <div> </div>
              
              <h2 style={{color: "blue"}}>Contact us:</h2>
              
              <p>bookbuy.a@gmail.com
                 <br/>
                 300 Bostonpost Road
                 <br/>
                 West Haven
                 <br/>
                 Ct 06516
                 </p>
              </div>
            </div>
            
          )
    }
}

export default About;