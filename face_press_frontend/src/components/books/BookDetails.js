import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/bookActions";

const BookDetails = ({ book, purchaseBook }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={book.image} alt={book.slug} />
      </div>
      <div className="content">
        <div className="header">{book.title}</div>
        <div className="meta">{book.date}</div>
        <div className="meta">
          {book.dimensions.width} in. x {book.dimensions.height} in.
        </div>
        <div className="meta">{book.museum.name}</div>
        <div className="description">
          by {book.writer.name}
          <p>£{book.price}</p>
          <p>{book.description}</p>
        </div>
        <div
          className="ui basic red right aligned button"
          onClick={() => purchaseBook(book.id)}
        >
          Buy
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions
)(BookDetails);
