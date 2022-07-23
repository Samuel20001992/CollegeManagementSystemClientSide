import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (studentCourseRegistrations = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return studentCourseRegistrations.map((studentCourseRegistration) => (studentCourseRegistration._id === action.payload._id ? action.payload : studentCourseRegistration));
    case CREATE:
      return [...studentCourseRegistrations, action.payload];
    case UPDATE:
      return studentCourseRegistrations.map((studentCourseRegistration) => (studentCourseRegistration._id === action.payload._id ? action.payload : studentCourseRegistration));
    case DELETE:
      return studentCourseRegistrations.filter((studentCourseRegistration) => studentCourseRegistration._id !== action.payload);
    default:
      return studentCourseRegistrations;
  }
};

