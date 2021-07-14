import { Card, Button, Dropdown } from 'react-bootstrap';

const LocationInfoBox = ({books, emails, setEmails, locationInfo, setSelectedBook, selectedBook}) => {  
  console.log("printing the value of books from locationbox", books)
  return (
        <div>
        <Card
        bg={'light'}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>Book Information</Card.Header>
        {!locationInfo ?
          <Card.Body>
              Please select the book from the map to view its information.
          </Card.Body> :
          <Card.Body>
            Book Name: {locationInfo.name} <br /> 
            Author: {locationInfo.author} <br />
            Condition: {locationInfo.condition} <br />
            Notes: {locationInfo.notes} <br />
            Exam Materials: {locationInfo.exam} <br />
            <Dropdown.Divider/>
            Provider:{locationInfo.provider}  <br />
            College: {locationInfo.college} <br /> 
            Email: {locationInfo.email} <br /> <br />
          {emails?.indexOf(locationInfo?.email) == -1 && 
          <Button 
            onClick = {() => {
              setSelectedBook([...selectedBook, locationInfo])
              }
            } 
            variant="outline-primary"
            disabled = {selectedBook?.indexOf(locationInfo) != -1}>
              Add Email
          </Button>}
            
          </Card.Body>
          
        }
        
        
      </Card>
      </div>
    )
}

export default LocationInfoBox
/*
  <Card.Title> {info?.title} </Card.Title>
            {info?.email ?  <div>Please select a book from the maps to send email</div> : 
            <div>
              <Card.Text>
              Email: {info?.email} 
              </Card.Text>
            
          </div>}
*/
