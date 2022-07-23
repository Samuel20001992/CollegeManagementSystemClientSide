import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (curriculums = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return curriculums.map((curriculum) => (curriculum._id === action.payload._id ? action.payload : curriculum));
    case CREATE:
      return [...curriculums, action.payload];
    case UPDATE:
      return curriculums.map((curriculum) => (curriculum._id === action.payload._id ? action.payload : curriculum));
    case DELETE:
      return curriculums.filter((curriculum) => curriculum._id !== action.payload);
    default:
      return curriculums;
  }
};

