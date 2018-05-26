import { SORT } from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case SORT:
      return action.payload;
    default:
      return state;
  }
};
