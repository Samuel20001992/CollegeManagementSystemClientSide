import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (adds = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return adds.map((add) => (add._id === action.payload._id ? action.payload : add));
    case CREATE:
      return [...adds, action.payload];
    case UPDATE:
      return adds.map((add) => (add._id === action.payload._id ? action.payload : add));
    case DELETE:
      return adds.filter((add) => add._id !== action.payload);
    default:
      return adds;
  }
};

