import { FETCH_BOOKS } from "./types";
import { SELECT_BOOK } from "./types";
import { PURCHASE_BOOK } from "./types";

export function fetchBooks() {
  return dispatch => {
    dispatch({ type: FETCH_BOOKS });
    return fetch("https://localhost:3005/api/v1/books")
      .then(resp => resp.json())
      .then(books => dispatch({ type: FETCH_BOOKS, payload: books }));
  };
}

export function selectBook(selectedBookId) {
  return { type: SELECT_BOOK, payload: selectedBookId };
}

export function purchaseBook(book) {
  return {
    type: PURCHASE_BOOK,
    payload: book
  };
}
