import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import * as actions from "../actions/bookActions";

class BookContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    console.log("props: ", this.props);
    return (
      <div className="row">
        <div className="six wide column">
          <BookList books={this.props.books} />
        </div>
        <div className="ten wide column">
          {this.props.activeBook ? (
            <BookDetails book={this.props.activeBook} />
          ) : (
            <h3>View Details</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.filter(book =>
    book.title.toLowerCase().includes(state.filter)
  ),
  activeBook: state.books.find(book => book.id === state.activeBookId),
  filter: state.filter
});

export default connect(
  mapStateToProps,
  actions
)(BookContainer);
