const express = require('express')
const app = express()

const Mongoose = require('mongoose')
const users = require('./users.js')
const orders = require('./Orders.js')
var path = require('path');

const db = Mongoose.connect('mongodb+srv://bookbuy:Avinash575@@bookbuy-5gxgq.mongodb.net/test', {useNewUrlParser: true})

Mongoose.connection.once('open', ()=> console.log("Connected "))

app.use(express.json())

app.use(express.static(path.join(__dirname,  'build')));

app.post("/api/bfa", async(req,res) =>{
    console.log("A request came in :"+ JSON.stringify(req.body));
    console.log("I am in server");
    const {email, password} = req.body;
 try{
     await users.create({email:email, password:password});
     return res.sendStatus(200);
 }
 catch(error){
     console.log("The error is :"+ error.message);
     return res.sendStatus(400);
 }
})

app.post("/api/auth", async(req,res) =>{
    flag = false;
    console.log("A request came in :"+ JSON.stringify(req.body));
    const {email, password} = req.body;
    let result1 = await users.findOne({email : req.body.email})
    if(!result1){
        console.log("User does not exists");
        return res.sendStatus(400);
    }
    let result2 = result1.password;
    console.log("The password I got  is: "+ result2);
    console.log("The username I got  is: "+ result1.email);
    console.log("The password you sent me is: "+ req.body.password);
    console.log("The username you sent me is: "+ req.body.email);
    
    if(result1.username === req.body.username && result2 === req.body.password){
        console.log("I am here");
        return res.sendStatus(200);
    } 
    else{
        console.log("I am here in else");
        return res.sendStatus(400);
    } 
}
)


app.post('/app/order', async (req, res) => {
  console.log("I am converting js object to json object: " + JSON.stringify(req.body))
  const {firstname, lastname, street, city, zipcode, username} = req.body
  try{
      await orders.create({firstname: firstname, lastname: lastname, street: street, city: city, zipcode: zipcode, username: username})
      return res.sendStatus(200);
  }
  catch(error){
      console.log("Error in adding orders at server side is: "+ error.message);
      return res.sendStatus(400);
  }
})

app.get('/app/address/:usname', async(req, res) => {
   console.log("I came to get address request");
    const username = req.params.usname;
    console.log(username);
    try{
        const result = await orders.find({username: username})
        return res.send(result).status(200);
    }
    catch(error){
        console.log("Error in fetching addresses at server side is: "+ error.message);
        return res.sendStatus(400);
    }
})

app.delete('/api/account', async(req, res) => {
    console.log("I came to get serve delete request");
    console.log(JSON.stringify(req.params.usname))
    const username = req.params.usname;
    console.log(username);
    try{
         await users.deleteOne({username: username})
        return res.sendStatus(200);
    }
    catch(error){
        console.log("Error in deleting user at server side: "+ error.message);
        return res.sendStatus(400);
    }
})

app.get('*', (request, response) => {

    return response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



const port = process.env.PORT || 4000;
app.listen(port, () => console.log("listening to port at 4000"))