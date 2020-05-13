import React from 'react'
class PostOrder extends React.Component{
    render(){
        const {fname, lname, street, zipcode, city} = this.props;
        return(
            <div>
               <p> Delivery Address: </p>
                <p> {fname}</p>
                <p> {lname} </p>
                <p> {street} </p>
                <p> {zipcode} </p>
                <p> {city} </p>
        </div>
        )
    }
}

export default PostOrder;