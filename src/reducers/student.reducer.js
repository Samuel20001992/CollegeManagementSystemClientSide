import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (students = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return action.payload;
    case LIKE:
      return students.map((student) => (student._id === action.payload._id ? action.payload : student));
    case CREATE:
      return [...students, action.payload];
    case UPDATE:
      return students.map((student) => (student._id === action.payload._id ? action.payload : student));
    case DELETE:
      return students.filter((student) => student._id !== action.payload);
    default:
      return students;
  }
};

