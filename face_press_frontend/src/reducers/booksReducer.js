import _ from "lodash";
import * as actions from "../actions/types";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload) };
    case PURCHASE_BOOK:
      //decrement book availability
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
export default booksReducer;
