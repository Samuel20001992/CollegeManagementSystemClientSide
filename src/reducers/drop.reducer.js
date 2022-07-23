import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (drops = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return drops.map((drop) => (drop._id === action.payload._id ? action.payload : drop));
    case CREATE:
      return [...drops, action.payload];
    case UPDATE:
      return drops.map((drop) => (drop._id === action.payload._id ? action.payload : drop));
    case DELETE:
      return drops.filter((drop) => drop._id !== action.payload);
    default:
      return drops;
  }
};

