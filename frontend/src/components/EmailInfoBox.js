import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'
// setEmails(arrayRemove(emails, email));
const EmailInfoBox = ({emails, setEmails}) => {
    console.log("Emails from the tag", emails);
    const handleDelete = (email) => {
        function arrayRemove(arr, value) { 
            return arr.filter(function(ele){ 
                return ele != value; 
            });
        }
        setEmails(arrayRemove(emails, email))
    };
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
          <Card.Title> List of Emails </Card.Title>
          <Card.Text>
          <div>
            {emails.map(email => ( 
          <div className="tag-item" key={email}>
            {email}
            <button
              type="button"
              className="button"
              onClick={() => {handleDelete(email)}}
            >
              &times;
            </button>
          </div>
        ))}
        </div>




          </Card.Text>
          {emails.length != 0 &&  <Button variant="outline-primary">Send Email</Button>}
          {emails.length == 0 &&  <Button disabled variant="outline-primary">Send Email</Button>}
        </Card.Body>
      </Card>
      
      </div>
        
    )
}

export default EmailInfoBox
