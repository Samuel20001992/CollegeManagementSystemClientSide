import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (courseBreakdowns = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return courseBreakdowns.map((courseBreakdown) => (courseBreakdown._id === action.payload._id ? action.payload : courseBreakdown));
    case CREATE:
      return [...courseBreakdowns, action.payload];
    case UPDATE:
      return courseBreakdowns.map((courseBreakdown) => (courseBreakdown._id === action.payload._id ? action.payload : courseBreakdown));
    case DELETE:
      return courseBreakdowns.filter((courseBreakdown) => courseBreakdown._id !== action.payload);
    default:
      return courseBreakdowns;
  }
};

