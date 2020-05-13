import React from 'react'
import PostOrder from './PostOrder';
import Homenav from './Homenav'
class Printaddress extends React.Component{
    render(){
        const {allorders} = this.props.location.state;
        const repsonse =  allorders.map((order) => <PostOrder    fname = {order.firstname} 
        lname = {order.lastname} street ={order.street} zipcode = {order.zipcode} city = {order.city}
        />);
        return(
            <div>
                <Homenav/>
             {repsonse}
             </div>
        )
    }
}

export default Printaddress;