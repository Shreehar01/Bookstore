import React from 'react';
import { Loader, Image, Segment } from 'semantic-ui-react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

import history from '../history';
import { Button } from 'semantic-ui-react'
const BookDetail = ( {book} ) => {
  if (!book) {
    return(
      <div>

  </div>
);
  }
  let notes="No";
  let exam="Yes";

  return (
    <div>
    <>
    <Divider horizontal>
      <Header as='h4' >
        <Icon name='tag' />
        Book Details
      </Header>
    </Divider>

    <p>
    Below, you will find additional information of your books. To make changes in the information you have provided, please click the Edit button below.
    If the books is no longer availabe, kindly remove the book from the database to avoid misinformation to our users.
    </p>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Subject</Table.Cell>
          <Table.Cell>{book.Subject}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Professor's Name</Table.Cell>
          <Table.Cell>{book.Professor}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Book's Name</Table.Cell>
          <Table.Cell>{book.Name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Edition</Table.Cell>
          <Table.Cell>{book.Edition}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Additional Information</Table.Cell>
          <Table.Cell>{book.AdditionalNotes}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Provider's Name</Table.Cell>
          <Table.Cell>TBA</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Provider's Year in College</Table.Cell>
          <Table.Cell>TBA</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Provider's Email</Table.Cell>
          <Table.Cell>TBA</Table.Cell>
        </Table.Row>
        <Table.Row>
                  <Button onClick={()=>{
                    localStorage.setItem('Book', book.BookName);
                    console.log(localStorage.Book)
                    history.push('/mybooks/edit');
                  }} content='Edit' primary />
          <Button content='Delete' primary />
        </Table.Row>

      </Table.Body>
    </Table>
  </>
    </div>  );
};

export default BookDetail;
