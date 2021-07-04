import React, {useState, setState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Avatar, Button, Paper, Grid, Typography, TextField} from '@material-ui/core';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import useStyles from './styles';
import Input from './Input';
import {signin, signup} from '../../actions/auth';
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import NavBar from './Navbar.js';
import Closing from './Closing.js';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '', collegeName: '', collegeYear: ''};


const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [showPassword, setshowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history))
        } else{
            dispatch(signin(formData, history))
        }
    };
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleShowPassword = () => setshowPassword((prevshowPassword) => !prevshowPassword);
    const switchMode = () => {
        setisSignup((previsSignup) => !previsSignup);
        //handleShowPassword(false);
        setshowPassword(false);
    };
    
    return (
        <div >
        <NavBar homepage = {true} />
           
        <Container>
  <Row>
     
    <Col sm={8}>

        <Paper className = {classes.paper} >
    <Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      alt="Nepal"
    />
    <Carousel.Caption>
      <h3>First Slide</h3>
      <p>This is new photo</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval = {3000}>
    <img
      className="d-block w-100"
      src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
















</Paper>
    </Col>
    <Col sm={4}>
        
    <Container component = "main" maxWidth = "xs">
            <Paper className = {classes.paper} >
                <Avatar className={classes.blue}>
                    <LockOpenRoundedIcon color= "primary" />
                </Avatar>
                <Typography variant = "h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className = {classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        {
                            isSignup && (
                                <>
                                        <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half />
                                        <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half />
                                        <Input name = "collegeYear" label = "Year In College" handleChange = {handleChange} />
                                        <Input name = "collegeName" label = "College Name" handleChange = {handleChange}/>  
                                </>
                            ) 
                        }
                        <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email" />
                        <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
                        {isSignup && <Input name = "confirmPassword" label = "Repeat Password" handleChange = {handleChange} type = "password"/>}
                        
                    </Grid>
                    <br />
                    <Button type = "submit" fullWidth variant = "contained" color = "primary" className = {classes.Submit}> 
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    
                    <Grid container justify = "flex-end">
                            <Grid item>
                                <Button onClick = {switchMode}>
                                    {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                    </Grid>
                </form>
                
            </Paper>
            
        </Container>
                        








    </Col>
  </Row>
  
</Container>

<br />
<br />
           
<Closing />
                </div>
        );
};

export default Auth;
