import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (departments = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return departments.map((department) => (department._id === action.payload._id ? action.payload : department));
    case CREATE:
      return [...departments, action.payload];
    case UPDATE:
      return departments.map((department) => (department._id === action.payload._id ? action.payload : department));
    case DELETE:
      return departments.filter((department) => department._id !== action.payload);
    default:
      return departments;
  }
};

