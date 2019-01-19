import React from "react";
import BookListItem from "./BookListItem";

const BookList = ({ books }) => {
  const bookItems = books.map(book => (
    <BookListItem key={book.id} book={book} />
  ));
  return <div className="ui relaxed divided list scroll">{bookItems}</div>;
};

export default BookList;
