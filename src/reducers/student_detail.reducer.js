import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (student_details = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return action.payload;
    case LIKE:
      return student_details.map((student_detail) => (student_detail._id === action.payload._id ? action.payload : student_detail));
    case CREATE:
      return [...student_details, action.payload];
    case UPDATE:
      return student_details.map((student_detail) => (student_detail._id === action.payload._id ? action.payload : student_detail));
    case DELETE:
      return student_details.filter((student_detail) => student_detail._id !== action.payload);
    default:
      return student_details;
  }
};

