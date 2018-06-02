import {RESULTS, SORT, IS_LOADING} from './types';

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

export const isLoading = bool => {
  return {
    type: IS_LOADING,
    payload: bool
  };
};
