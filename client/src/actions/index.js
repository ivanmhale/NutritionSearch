import {RESULTS, SORT} from './types';

export const results = results => {
  return {
    type: RESULTS,
    payload: results
  };
};

export const sort = method => {
  return {
    type: SORT,
    payload: method
  };
};
