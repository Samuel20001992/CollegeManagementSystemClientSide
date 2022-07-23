import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (withdrawals = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return withdrawals.map((withdrawal) => (withdrawal._id === action.payload._id ? action.payload : withdrawal));
    case CREATE:
      return [...withdrawals, action.payload];
    case UPDATE:
      return withdrawals.map((withdrawal) => (withdrawal._id === action.payload._id ? action.payload : withdrawal));
    case DELETE:
      return withdrawals.filter((withdrawal) => withdrawal._id !== action.payload);
    default:
      return withdrawals;
  }
};

