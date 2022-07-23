import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

export default (readmissions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return readmissions.map((readmission) => (readmission._id === action.payload._id ? action.payload : readmission));
    case CREATE:
      return [...readmissions, action.payload];
    case UPDATE:
      return readmissions.map((readmission) => (readmission._id === action.payload._id ? action.payload : readmission));
    case DELETE:
      return readmissions.filter((readmission) => readmission._id !== action.payload);
    default:
      return readmissions;
  }
};

