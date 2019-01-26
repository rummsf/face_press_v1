import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import booksReducer from "./booksReducer";
import writersReducer from "./writersReducer";
import usersReducer from "./usersReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  writers: writersReducer,
  users: usersReducer,
  filter: filterReducer,
  form: formReducer
});

export default rootReducer;
