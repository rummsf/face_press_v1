import _ from "lodash";
import { FETCH_BOOKS, SELECT_BOOK, PURCHASE_BOOK } from "../actions/types";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload) };
    case SELECT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    // case PURCHASE_BOOK:
    //   //decrement book availability
    //   return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
export default booksReducer;
