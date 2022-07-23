import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (clearances = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return clearances.map((clearance) => (clearance._id === action.payload._id ? action.payload : clearance));
    case CREATE:
      return [...clearances, action.payload];
    case UPDATE:
      return clearances.map((clearance) => (clearance._id === action.payload._id ? action.payload : clearance));
    case DELETE:
      return clearances.filter((clearance) => clearance._id !== action.payload);
    default:
      return clearances;
  }
};

