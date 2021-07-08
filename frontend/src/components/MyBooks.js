import React, {useState} from 'react'
import Navbar from './Auth/Navbar';
import Closing from './Auth/Closing';
import Contents from './Contents';
import Manualform from './Manualform';
import {Row, Col, Container} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

const MyBooks = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    return (
        <div>
           <Navbar />
           <Container>
  <Row>
    <Col xs={12} md={8}>
        <br />
        <br />
      <Contents mybooks = {true} setCurrentId = {setCurrentId} />
      
    </Col>
    <Col xs={6} md={4}>
        <br />
        <br />
    <Manualform currentId = {currentId}  setCurrentId = {setCurrentId}/>
    </Col>
  </Row>
  </Container>
           <Closing /> 
        </div>
    )
}

export default MyBooks
