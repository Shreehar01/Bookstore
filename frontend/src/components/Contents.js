import React , {useEffect, useState} from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'

import {useSelector, useDispatch} from 'react-redux';

import {getBooks, deleteBook} from '../actions/book';
import { getRequests, deleteRequest } from '../actions/request';
import {sendMail} from '../actions/mail';

import { IoIosSend } from 'react-icons/io';
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin5Line} from 'react-icons/ri';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

import {Modal} from 'react-bootstrap';

import SearchMaps from './SearchMaps.js';

// Modal
function MyVerticallyCenteredModal(props) {
  console.log("Props", props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Send Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Dear {props.bookInfo?.provider?.split(" ")[0]}, <br />
          I found your email from the Bookstore application online. I was really interested in the book {props.bookInfo.name} written by {props.bookInfo.author}. Can you please give me your book if you don't need it? My email address is {props.myProfile.result.email}.
          <br />  <br />
          Sincerely,
          <br />
          {props.myProfile.result.name} 
          <br />
          {props.myProfile.result.collegeName} 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.sendmail}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#203354',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#a5c9f2',
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
table: {
    minWidth: 700,
},
});

const rows = []



const Contents = ({mybooks, myrequests, setCurrentId, checkedStatus}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    const [stateValue, setStateValue] = React.useState('');
    const [selectedBook, setSelectedBook] = React.useState({});
    const myProfile = JSON.parse(localStorage.getItem('profile'));
    const books = useSelector((state) => state.mybooks);
    const sentId = useSelector((state)=> state.mailsent);
    console.log("Sent Id from the contents", sentId)
    console.log('Checked Status', checkedStatus)
    //console.log("The current location ", window.location.href)
    //console.log("Seeing rows from the content", typeof(rows))
    //console.log("Seeing books from the content", (books))
    const info = window.location.href.split("/");
    const currentPage =  info[info.length - 1];
    

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });





    const listofIds = sentId.map((sendId)=>{
      return sendId.bookId
    })   
    console.log("Printing the value of listofIds", listofIds)
    
    useEffect (()=>{
      if (currentPage === "mybooks") {
        dispatch(getBooks());
      }else if (currentPage === "myrequests"){
        dispatch(getRequests());
      }else{
        // Implement the getSearchEntries()
      }
      
    }, [dispatch])
    
    const sendmail = () =>{
      console.log("Send Mail was called")
      const mailInformation = {bookId: selectedBook._id, receiverName: selectedBook.provider.split(" ")[0], receiverEmail: selectedBook.email, bookName: selectedBook.name, authorName: selectedBook.author, senderName: myProfile.result.name, senderCollege: myProfile.result.collegeName, senderEmail: myProfile.result.email}
      console.log("Printing the mailInformation", mailInformation)
      dispatch(sendMail(mailInformation));
      setModalShow(false);
    }

  
        
    return (
        <div> 

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bookInfo = {selectedBook}
        myProfile = {myProfile}
        sendmail = {sendmail}
        stateValue = {stateValue}
        setStateValue = {setStateValue}
      />

{!checkedStatus ? 
<>

<Container>
  <Row>
    <Col sm={12}>
            
 







    <Paper className={classes.root}>

    <TableContainer className = {classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Book Name and Edition</StyledTableCell>
          <StyledTableCell >Author's Name</StyledTableCell>
            
            {!myrequests && <StyledTableCell align = "right">Condition</StyledTableCell>}
            <StyledTableCell align="right">Subject</StyledTableCell>
            <StyledTableCell align="right">Professor</StyledTableCell>
            {!mybooks && !myrequests && <StyledTableCell align="right">College Name</StyledTableCell>}
            {!myrequests && <StyledTableCell align="right">Notes</StyledTableCell>}
            {!myrequests && <StyledTableCell align="right">Exam Materials</StyledTableCell>}
            {!mybooks &&
            <StyledTableCell align="right">Provider's Name</StyledTableCell>}
            { !mybooks &&
            <StyledTableCell align="right">Send Email</StyledTableCell>}
            
            {mybooks && <StyledTableCell align="right">Modify/Delete</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {!books ? <>Loading </> : books?.map((book) => (
            <StyledTableRow key={book.name}>
              <StyledTableCell component="th" scope="row">
                {book.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {book.author}
              </StyledTableCell>
              {!myrequests &&< StyledTableCell align="right">{book.condition}</StyledTableCell>}
              <StyledTableCell align="right">{book.subject}</StyledTableCell>
              <StyledTableCell align="right">{book.professor}</StyledTableCell>
              {!myrequests && !mybooks && <StyledTableCell align="right">{book.college}</StyledTableCell>}
              
              {!myrequests && <StyledTableCell align="right">{book.notes}</StyledTableCell>}
              {!myrequests && < StyledTableCell align="right">{book.exam}</StyledTableCell>}
              {!myrequests && !mybooks && < StyledTableCell align="right">{book.provider}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right">
                <Button disabled = {listofIds.includes(book._id) ? true : false} onClick = {() => {
                  setSelectedBook(book)
                  setModalShow(true)}} variant="outline-primary">
                <IoIosSend />
                </Button> 
              </StyledTableCell>}
              {mybooks && <StyledTableCell align="right"><Button onClick = {()=> setCurrentId(book._id)} variant="outline-primary"><FiEdit /> </Button> {}
              <Button onClick = {() => {currentPage === "mybooks" ? dispatch(deleteBook(book._id)): dispatch(deleteRequest(book._id)) }} variant="outline-danger"><RiDeleteBin5Line /> </Button></StyledTableCell>}
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
      
    </TableContainer>
    
    </Paper>


    </Col>
    
  </Row>
  
</Container>


</> :
<SearchMaps books = {books} latitude = {latitude} longitude = {longitude} />

}
        </div>
    )
}

export default Contents

/*
*/