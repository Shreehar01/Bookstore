import React from 'react';
import { Loader, Image, Segment } from 'semantic-ui-react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const BookDetail = ( {book} ) => {
  if (!book) {
    return(
      <div>
      <Segment>
    <Loader disabled />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>
);
  }
  let notes="No";
  let exam="Yes";

  return (
    <div>
    <>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Book Details
      </Header>
    </Divider>

    <p>
    Below, you will find additional information of the book and its sender. Please make sure you follow guidelines of our community
    while contacting the book provider. Any violations might lead to permanent ban from using the bookstore.
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

      </Table.Body>

    </Table>

  </>
    </div>
  );
};

export default BookDetail;
