import * as actions from "../actions/bookActions";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return [...action.payload];
    case "PURCHASE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
export default booksReducer;
