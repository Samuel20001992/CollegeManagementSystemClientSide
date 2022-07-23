import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (instructor_courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return instructor_courses.map((instructor_course) => (instructor_course._id === action.payload._id ? action.payload : instructor_course));
    case CREATE:
      return [...instructor_courses, action.payload];
    case UPDATE:
      return instructor_courses.map((instructor_course) => (instructor_course._id === action.payload._id ? action.payload : instructor_course));
    case DELETE:
      return instructor_courses.filter((instructor_course) => instructor_course._id !== action.payload);
    default:
      return instructor_courses;
  }
};

