import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { updateInformation } from '../api';
import {useDispatch} from 'react-redux';

const InfoForm = ({user}) => {
  const [initialState, setInitialState] = useState({firstName: user.result.name.split(" ")[0], lastName: user.result.name.split(" ")[1] , email: user.result.email, password: "", collegeYear: user.result.collegeYear, major: user.result.major, collegeName: user.result.collegeName});
  const dispatch = useDispatch();
  console.log("Initial State in the Info Form ", initialState)
  // console.log("User object passed in the InfoForm ", user.result)
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(updateInformation(initialState));
  };
  
  const handleChange = (e) =>{
    console.log("From the handle change in infoform ", e.target)
    console.log("From the handle change in infoform ", e.target.value)
    setInitialState({...initialState, [e.target.name]: e.target.value});
  };

  return (
        <div>
            <br />
            <br />
            <Container>
  <Row>
    <Col xs={8} md={4}>
    <Form>
    <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control name = "firstName" value = {initialState.firstName} onChange = {handleChange} />
  </Form.Group>


    </Col>
    <Col>
      
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control name = "lastName" value = {initialState.lastName} onChange = {handleChange}/>
  </Form.Group>

    </Col>
  </Row>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name = "email" type="email" value = {initialState.email} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name = "password" type="password" value = {initialState.password} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Major</Form.Label>
    <Form.Control name = "major" value = {initialState.major} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Year In College</Form.Label>
    <Form.Control name = "collegeYear" value = {initialState.collegeYear} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>College's Name</Form.Label>
    <Form.Control name = "collegeName" value = {initialState.collegeName} onChange = {handleChange}/>
  </Form.Group>
  <br />
  <Button variant="outline-primary">Update</Button>
</Form>
</Col>
  </Row>
</Container>
        </div>
    )
}

export default InfoForm
