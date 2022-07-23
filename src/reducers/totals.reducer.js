import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (totals = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return action.payload;
    case LIKE:
      return totals.map((total) => (total._id === action.payload._id ? action.payload : total));
    case CREATE:
      return [...totals, action.payload];
    case UPDATE:
      return totals.map((total) => (total._id === action.payload._id ? action.payload : total));
    case DELETE:
      return totals.filter((total) => total._id !== action.payload);
    default:
      return totals;
  }
};

