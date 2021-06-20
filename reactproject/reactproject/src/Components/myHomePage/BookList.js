import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect }) => {
  const renderedList = books.map(book => {

    console.log(book);
    return (
      <BookItem
        key={books._id}
        onBookSelect={onBookSelect}
        book={book}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default BookList;
