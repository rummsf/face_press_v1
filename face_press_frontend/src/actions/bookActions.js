export function fetchBooks(books) {
  return {
    type: "FETCH_BOOKS",
    payload: books
  };
}

export function selectBook(selectedID) {
  return { type: "SELECT_BOOK", payload: selectedID };
}

export function purchaseBook(book) {
  return {
    type: "PURCHASE_BOOK",
    payload: book
  };
}
