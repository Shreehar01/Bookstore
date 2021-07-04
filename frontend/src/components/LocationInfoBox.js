import { Card, Button } from 'react-bootstrap';

const LocationInfoBox = ({info, emails, setEmails}) => {  
 
  return (
        <div>
        <Card
        bg={'light'}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>Books</Card.Header>
        <Card.Body>
          <Card.Title> {info.title} </Card.Title>
          <Card.Text>
            Email: {info.email}
          </Card.Text>
          {emails.indexOf(info.email) == -1 && <Button onClick = {() =>{setEmails([...emails, info.email])}} variant="outline-primary">Add Email</Button>}
          {emails.indexOf(info.email) != -1 && <Button disabled onClick = {() =>{setEmails([...emails, info.email])}} variant="outline-primary">Add Email</Button>}
                 
        </Card.Body>
      </Card>
      </div>
    )
}

export default LocationInfoBox