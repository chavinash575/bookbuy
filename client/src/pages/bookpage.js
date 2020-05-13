import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';
import Homenav from './Homenav';
import PostOrder from './PostOrder';
class bookpage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allorders : []
    }
    this.bookbutton = this.bookbutton.bind(this)
    this.fetchAddresses = this.fetchAddresses.bind(this);
    this.deleteUsers = this.deleteUsers.bind(this);
  }
  
  bookbutton(){
    const usname = this.props.location.state.username;
    this.props.history.push('/delivery', {uname: usname})
  }
  async deleteUsers(){
    const usname = this.props.location.state.username;
    try{
    const response = await Axios.delete('/api/account/',  {params: {foo: usname}})
    if(response.status === 200){
      console.log("Delete Successful");
      this.props.history.push('/')
    }
  }
  catch(error){
    console.log("Error in client side deleting" + error.message)
  }  
  }
  async fetchAddresses(){
    const usname = this.props.location.state.username;
    const response = await Axios.get('/app/address/'+usname);
    const {data} = response
    console.log("I am here.....")
    this.props.history.push('/printaddress', {allorders: data});
  
  }
  render(){
    const cards = [1];
  return (
    <div>
    <React.Fragment>
      <CssBaseline />
      <Homenav />
      <main>
        <div>
          <Container maxWidth="md">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              CHOOSE THE BOOK YOU WISH TO
            </Typography>
            <div>
              <Grid container spacing={8} justify="center">
                <Grid item>
                  
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
        
          <Grid container spacing={8}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="http://t0.gstatic.com/images?q=tbn%3AANd9GcRO-kfeYvwKQE6QZJhJr7xVGS-6JFYHjYTwQYCfZPaBTPAx0_Ca__s4xKQAcAiuH01FOzkicwyH&usqp=CAc"
                    title="Harry Potter"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Harry Potter and the Sorcerer's Stone
                    </Typography>
                    <Typography>
                    Novel by J. K. Rowling
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
              
            ))}
          </Grid>
        </Container>
        
      </main>
      

      <main>
        <div>
          <Container maxWidth="md">
            
            <div>
              <Grid container>
                <Grid item>
                  
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    image="https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg"
                    title="Hound of the Baskervilles"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Hound of the Baskervilles
                    </Typography>
                    <Typography>
                      Aurther Conan Doyle
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                  
                    title="Master in software quality assurance"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Master in software quality assurance
                    </Typography>
                    <Typography>
                      Murali Chemuturi
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    
                    title="Gulliver Travels"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Gulliver Travels
                    </Typography>
                    <Typography>
                      Jonathan Smith
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    image="https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg"
                    title="can love happen twice"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    can love happen twice
                    </Typography>
                    <Typography>
                      Ravinder Singh
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    image="https://www.gutenberg.org/files/2852/2852-h/images/cover.jpg"
                    title="Hound of the Baskervilles"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    The Lord of the Rings
                    </Typography>
                    <Typography>
                    Novel by J. R. R. Tolkien
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {this.bookbutton} size="small" color="primary">
                      buy
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <div id="logoutbtn">
      <Button onClick = {this.fetchAddresses}> Addresses </Button>
      <Button onClick = {this.deleteUsers}> Delete Account </Button>
     
      </div>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
        BookBuy Limited
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Copyright 2020
        </Typography>
      </footer>
    
    </React.Fragment>
    </div>
  );
}
}

export default  withRouter(bookpage);