import React from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'

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

function createData(name, calories, fat, carbs, protein, caloriess, fats, carbss, proteins) {
  return { name, calories, fat, carbs, protein, caloriess, fats, carbss, proteins };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('Eclair', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
];




const Contents = ({mybooks, myrequests, setCurrentId}) => {
    const classes = useStyles();

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
            {!myrequests && <StyledTableCell align = "right">Condition</StyledTableCell>}
            <StyledTableCell align="right">Subject</StyledTableCell>
            <StyledTableCell align="right">Professor</StyledTableCell>
            {!mybooks && <StyledTableCell align="right">College Name</StyledTableCell>}
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              {!myrequests && <StyledTableCell align="right">{row.fat}</StyledTableCell>}
              {!myrequests && <StyledTableCell align="right">{row.carbs}</StyledTableCell>}
              {!myrequests && <StyledTableCell align="right">{row.protein}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right">{row.caloriess}</StyledTableCell>}
              {!mybooks && <StyledTableCell align="right">{row.fats}</StyledTableCell>}
              <StyledTableCell align="right">{row.carbss}</StyledTableCell>
              {!mybooks && <StyledTableCell align="right"><Button variant="outline-primary"><IoIosSend /></Button> </StyledTableCell>}
              {mybooks && <StyledTableCell align="right"><Button variant="outline-primary"><FiEdit /> </Button> {}<Button variant="outline-danger"><RiDeleteBin5Line /> </Button></StyledTableCell>}
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
