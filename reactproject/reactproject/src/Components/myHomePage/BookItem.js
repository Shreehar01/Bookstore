import React from 'react';
import { List,Segment } from 'semantic-ui-react'
const BookItem = ({ book, onBookSelect }) => {
  if(!book){
    return <div> Loading </div>;
  }
  return (
    <div onClick={() => onBookSelect(book)} >
    <List celled>
    <List.Item>

      <List.Icon  name='book' inverted color="black" size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{book.Subject}</List.Header>
        <List.Description as='a'>Professor: {book.Professor}</List.Description>
        <List.Description as='a'>Additional Notes: {book.AdditionalNotes}</List.Description>
      </List.Content>
    </List.Item>
    </List>
        </div>

  );
};

export default BookItem;
