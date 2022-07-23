import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (courseOfferings = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return courseOfferings.map((courseOffering) => (courseOffering._id === action.payload._id ? action.payload : courseOffering));
    case CREATE:
      return [...courseOfferings, action.payload];
    case UPDATE:
      return courseOfferings.map((courseOffering) => (courseOffering._id === action.payload._id ? action.payload : courseOffering));
    case DELETE:
      return courseOfferings.filter((courseOffering) => courseOffering._id !== action.payload);
    default:
      return courseOfferings;
  }
};

