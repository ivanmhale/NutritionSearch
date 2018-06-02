import { combineReducers } from "redux";
import Results from "./resultsReducer";
import Sort from './sortReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
  results: Results,
  sort: Sort,
  loading: Loading
});
export default rootReducer;
