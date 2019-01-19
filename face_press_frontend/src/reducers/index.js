import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import writersReducer from "./writersReducer";
import usersReducer from "./usersReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  writers: writersReducer,
  users: usersReducer,
  filter: filterReducer
});

export default rootReducer;
