import React , {useEffect} from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'

import {useSelector, useDispatch} from 'react-redux';

import {getBooks, deleteBook} from '../actions/book';
import { getRequests, deleteRequest } from '../actions/request';

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



const Contents = ({mybooks, myrequests, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const books = useSelector((state) => state.mybooks);
    console.log("The current location ", window.location.href)
    console.log("Seeing rows from the content", typeof(rows))
    console.log("Seeing books from the content", (books))
    const info = window.location.href.split("/");
    const currentPage =  info[info.length - 1];
    useEffect (()=>{
      if (currentPage === "mybooks") {
        dispatch(getBooks());
      }else if (currentPage === "myrequests"){
        dispatch(getRequests());
      }else{
        // Implement the getSearchEntries()
      }
      
    }, [dispatch])
    return (
        <div>



<Container>
  <Row>
    <Col sm={12}>
            
 







    <Paper className={classes.root}>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
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
              {!myrequests && <StyledTableCell align="right">{book.notes}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right">{book.caloriess}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right">{book.fats}</StyledTableCell>}
              {!myrequests && < StyledTableCell align="right">{book.exam}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right"><Button variant="outline-primary"><IoIosSend /></Button> </StyledTableCell>}
              {mybooks && <StyledTableCell align="right"><Button onClick = {()=> setCurrentId(book._id)} variant="outline-primary"><FiEdit /> </Button> {}
              <Button onClick = {() => {currentPage === "mybooks" ? dispatch(deleteBook(book._id)): dispatch(deleteRequest(book._id)) }} variant="outline-danger"><RiDeleteBin5Line /> </Button></StyledTableCell>}
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
      
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={5}
        page={5}
        onChangePage={() => {}}
        onChangeRowsPerPage={() =>{}}
      />

    </Paper>


    </Col>
    
  </Row>
  
</Container>


        </div>
    )
}

export default Contents

/*
*/