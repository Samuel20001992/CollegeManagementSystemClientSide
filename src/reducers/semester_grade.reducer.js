import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

export default (semester_grades = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return semester_grades.map((semester_grade) => (semester_grade._id === action.payload._id ? action.payload : semester_grade));
    case CREATE:
      return [...semester_grades, action.payload];
    case UPDATE:
      return semester_grades.map((semester_grade) => (semester_grade._id === action.payload._id ? action.payload : semester_grade));
    case DELETE:
      return semester_grades.filter((semester_grade) => semester_grade._id !== action.payload);
    default:
      return semester_grades;
  }
};

