import { RESULTS } from "../actions/types";

const refactor = payload => {
  let array = [];
  payload.hits.map(hit => {
    array.push({
      id: hit._id,
      fields: hit.fields
    });
  });
  return array;
};

export default (state = "", action) => {
  switch (action.type) {
    case RESULTS:
      return refactor(action.payload);
    default:
      return state;
  }
};
