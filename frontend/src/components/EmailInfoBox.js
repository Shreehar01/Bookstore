import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {sendMultipleMails} from '../actions/mail';
import { useDispatch } from 'react-redux';
import './styles.css'
// setEmails(arrayRemove(emails, email));
const EmailInfoBox = ({selectedBook, setSelectedBook}) => {
  const dispatch = useDispatch();  
  
  console.log("Printing the seelcted book from the Email Info Box", selectedBook);  
  
    // const handleDeleteEmails = (email) => {
    //     function arrayRemove(arr, value) { 
    //         return arr.filter(function(ele){ 
    //             return ele != value; 
    //         });
    //     }
    //     setEmails(arrayRemove(emails, email))
    // };
  
    const handleSubmit = () =>{
      dispatch(sendMultipleMails(selectedBook))
      setSelectedBook([]);
    }
    
   const handleDeleteBooks = (book) =>{
        function arrayRemove(arr, value) { 
            return arr.filter(function(ele){ 
                return ele != value; 
            });
        }
        setSelectedBook(arrayRemove(selectedBook, book))
   }  

    return (
        <div>
        <Card
        bg={'light'}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>Emails</Card.Header>
        <Card.Body>
          {!selectedBook.length && <Card.Text> Add the emails to send multiple book requests at once. </Card.Text>}
          <Card.Text>
          <div>
            {selectedBook.map(book => ( 
          <div className="tag-item" key={book._id}>
            {book.email}
            <button
              type="button"
              className="button"
              onClick={() => {handleDeleteBooks(book)}}
            >
              &times;
            </button>
          </div>
        ))}
        </div>




          </Card.Text>
          {<Button variant="outline-primary" disabled = {selectedBook.length === 0} onClick = {handleSubmit}>Send Email</Button>}
          </Card.Body>
      </Card>
      
      </div>
        
    )
}

export default EmailInfoBox
