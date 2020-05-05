import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todo from "./todoReducer";

const rootReducer = combineReducers({
  todo,
  form: formReducer,
});

export default rootReducer;
