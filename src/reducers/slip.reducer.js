import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (slips = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return slips.map((slip) => (slip._id === action.payload._id ? action.payload : slip));
    case CREATE:
      return [...slips, action.payload];
    case UPDATE:
      return slips.map((slip) => (slip._id === action.payload._id ? action.payload : slip));
    case DELETE:
      return slips.filter((slip) => slip._id !== action.payload);
    default:
      return slips;
  }
};

