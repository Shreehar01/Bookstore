import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap';


const Manualform = ({myrequests}) => {
    return (
        <div>
          <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name and Edition</Form.Label>
    <Form.Control placeholder="Data Structures and Algorithm (2nd ed.)" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Author's Name</Form.Label>
    <Form.Control placeholder="Sourav K. Dutta" />
  </Form.Group>
  {!myrequests &&
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Condition</Form.Label>
    <Form.Control as="select" multiple>
    <option>Brand New</option>
      <option>Like New</option>
      <option>Very Good</option>
      <option>Good</option>
      <option>Acceptable</option>
    </Form.Control>
  </Form.Group>}
  
  
  <Form>
  <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Computer Science" />
  </Form.Group>


    </Col>
    <Col>
      
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Professor's Name</Form.Label>
    <Form.Control placeholder="Victor Miller" />
  </Form.Group>

    </Col>
  </Row>
</Form>
  {!myrequests &&
  <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Notes</Form.Label>
    <Form.Control as="select">
      <option>Present</option>
      <option>Absent</option>
    </Form.Control>
  </Form.Group>
  
    
  
    </Col>
    <Col>
    

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Exam Materials</Form.Label>
    <Form.Control as="select">
      <option>Present</option>
      <option>Absent</option>
    </Form.Control>
    </Form.Group>
    </Col>
  </Row>
  }
  <br />
  <Button variant="outline-primary">Submit</Button>
</Form>  
        </div>
    )
}

export default Manualform;
