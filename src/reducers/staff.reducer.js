import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (staffs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return staffs.map((staff) => (staff._id === action.payload._id ? action.payload : staff));
    case CREATE:
      return [...staffs, action.payload];
    case UPDATE:
      return staffs.map((staff) => (staff._id === action.payload._id ? action.payload : staff));
    case DELETE:
      return staffs.filter((staff) => staff._id !== action.payload);
    default:
      return staffs;
  }
};

