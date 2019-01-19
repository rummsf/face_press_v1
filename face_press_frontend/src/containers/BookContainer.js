import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class BookContainer extends Component {
  componentDidMount() {}
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
