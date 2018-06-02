import { IS_LOADING } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};
