import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { updateInformation } from '../actions/auth';
import {useDispatch} from 'react-redux';

const InfoForm = ({user}) => {
  const [personalInformation, setPersonalInformation] = useState({firstName: user.result.name.split(" ")[0], lastName: user.result.name.split(" ")[1] , email: user.result.email, password: "", collegeYear: user.result.collegeYear, major: user.result.major ? user.result.major: '', collegeName: user.result.collegeName});
  const dispatch = useDispatch();
  // console.log("Initial State in the Info Form ", personalInformation)
  // console.log("User object passed in the InfoForm ", user.result)
  
  
  
  const handleSubmit = (event) =>{
    console.log("On Handle Submit called from the Info Form");
    event.preventDefault();
    console.log("On Handle Submit called from the Info Form Second Step"); 
    dispatch(updateInformation(personalInformation));
    console.log("On Handle Submit called from the Info Form Third Step"); 
  };
  
  const handleChange = (e) => {
    // console.log("From the handle change in infoform ", e.target)
    // console.log("From the handle change in infoform ", e.target.value)
    setPersonalInformation({...personalInformation, [e.target.name]: e.target.value});
  };

  return (
        <div>
            <br />
            <br />
            <Container>
  <Row>
    <Col xs={8} md={4}>
    <Form type = "submit">
    <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control name = "firstName" value = {personalInformation.firstName} onChange = {handleChange} />
  </Form.Group>


    </Col>
    <Col>
      
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control name = "lastName" value = {personalInformation.lastName} onChange = {handleChange}/>
  </Form.Group>

    </Col>
  </Row>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control disabled name = "email" type="email" value = {personalInformation.email} />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name = "password" type="password" value = {personalInformation.password} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Major</Form.Label>
    <Form.Control name = "major" value = {personalInformation.major} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Year In College</Form.Label>
    <Form.Control name = "collegeYear" value = {personalInformation.collegeYear} onChange = {handleChange}/>
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>College's Name</Form.Label>
    <Form.Control name = "collegeName" value = {personalInformation.collegeName} onChange = {handleChange}/>
  </Form.Group>
  <br />
  <Button onClick = {handleSubmit} variant="outline-primary">Update</Button>
</Form>
</Col>
  </Row>
</Container>
        </div>
    )
}

export default InfoForm
