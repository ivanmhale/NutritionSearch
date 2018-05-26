import { combineReducers } from "redux";
import Results from "./resultsReducer";
import Sort from './sortReducer';

const rootReducer = combineReducers({
  results: Results,
  sort: Sort
});
export default rootReducer;
