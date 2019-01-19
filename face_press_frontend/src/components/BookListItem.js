import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const BookListItem = ({ book, selectBook }) => {
  return (
    <div onClick={() => selectBook(book.id)} className="ui item">
      <span style={{ cursor: "pointer" }}>{book.title}</span>
    </div>
  );
};

export default connect(
  null,
  actions
)(BookListItem);
