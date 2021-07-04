import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const InfoForm = () => {
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
    <Form.Control placeholder="First Name" />
  </Form.Group>


    </Col>
    <Col>
      
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Last Name" />
  </Form.Group>

    </Col>
  </Row>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Major</Form.Label>
    <Form.Control placeholder="Enter major" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Year In College</Form.Label>
    <Form.Control placeholder="Enter Year" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>College's Name</Form.Label>
    <Form.Control placeholder="Enter College's Name" />
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
