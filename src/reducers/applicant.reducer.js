import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (applicants = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return applicants.map((applicant) => (applicant._id === action.payload._id ? action.payload : applicant));
    case CREATE:
      return [...applicants, action.payload];
    case UPDATE:
      return applicants.map((applicant) => (applicant._id === action.payload._id ? action.payload : applicant));
    case DELETE:
      return applicants.filter((applicant) => applicant._id !== action.payload);
    default:
      return applicants;
  }
};

