import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, Row, Col} from 'react-bootstrap';
import {createBook} from '../actions/book';

const Manualform = ({myrequests}) => {
  const ownerInformation = JSON.parse(localStorage.getItem('profile'));
  const ownerId = ownerInformation.result._id;
  console.log("Owner Information from the redux state in the manual form", ownerId)
  const [bookInfo, setBookInfo] = useState({name: '', author: '', condition: '', subject: '', professor: '', notes: '', exam: ''});


  const dispatch = useDispatch();


  const handleChange = (e) => {
    // console.log("From the handle change in infoform ", e.target)
    // console.log("From the handle change in infoform ", e.target.value)
    setBookInfo({...bookInfo, [e.target.name]: e.target.value});
    console.log("Book Information from the manual form in the handleChange", bookInfo)
    
  };

  const handleSubmit = (event) =>{
    // console.log("On Handle Submit called from the Info Form");
    event.preventDefault();
    const bookInformation = bookInfo;
    bookInformation.Owner = ownerId;
    dispatch(createBook(bookInformation))
    // console.log("On Handle Submit called from the Info Form Second Step"); 
    // dispatch(updateInformation(personalInformation));
    // console.log("On Handle Submit called from the Manual Form", bookInfo); 
  };

  return (
        <div>
          <Form type = "submit">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name and Edition</Form.Label>
    <Form.Control onChange = {handleChange} name = "name" value = {bookInfo.name} placeholder="Data Structures and Algorithm (2nd ed.)" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Author's Name</Form.Label>
    <Form.Control onChange = {handleChange} name = "author" value = {bookInfo.author} placeholder="Sourav K. Dutta" />
  </Form.Group>
  {!myrequests &&
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Condition</Form.Label>
    <Form.Control onChange = {handleChange} name = "condition" value = {bookInfo.condition} as="select">
    <option value = "Brand New">Brand New</option>
      <option value = "Like New">Like New</option>
      <option value = "Very Good">Very Good</option>
      <option value = "Good">Good</option>
      <option value = "Acceptable">Acceptable</option>
    </Form.Control>
  </Form.Group>}
  
  
  <Form>
  <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control onChange = {handleChange} name = "subject" value = {bookInfo.subject} placeholder="Computer Science" />
  </Form.Group>


    </Col>
    <Col>
      
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Professor's Name</Form.Label>
    <Form.Control onChange = {handleChange} name = "professor" value = {bookInfo.professor} placeholder="Victor Miller" />
  </Form.Group>

    </Col>
  </Row>
</Form>
  {!myrequests &&
  <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Notes</Form.Label>
    <Form.Control as="select" value = {bookInfo.notes} name = "notes" onChange = {handleChange}>
      <option value = "Present">Present</option>
      <option value = "Absent">Absent</option>
    </Form.Control>
  </Form.Group>
  
    
  
    </Col>
    <Col>
    

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Exam Materials</Form.Label>
    <Form.Control onChange = {handleChange} as="select" name = "exam" value = {bookInfo.exam}>
      <option value = "Present">Present</option>
      <option value = "Absent">Absent</option>
    </Form.Control>
    </Form.Group>
    </Col>
  </Row>
  }
  <br />
  <Button onClick = {handleSubmit} variant="outline-primary">Submit</Button>
</Form>  
        </div>
    )
}

export default Manualform;
