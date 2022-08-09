import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (attendances = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return attendances.map((attendance) => (attendance._id === action.payload._id ? action.payload : attendance));
    case CREATE:
      return [...attendances, action.payload];
    case UPDATE:
      return attendances.map((attendance) => (attendance._id === action.payload._id ? action.payload : attendance));
    case DELETE:
      return attendances.filter((attendance) => attendance._id !== action.payload);
    default:
      return attendances;
  }
};

