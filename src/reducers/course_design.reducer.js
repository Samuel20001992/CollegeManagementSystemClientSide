import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (course_designs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return course_designs.map((course_design) => (course_design._id === action.payload._id ? action.payload : course_design));
    case CREATE:
      return [...course_designs, action.payload];
    case UPDATE:
      return course_designs.map((course_design) => (course_design._id === action.payload._id ? action.payload : course_design));
    case DELETE:
      return course_designs.filter((course_design) => course_design._id !== action.payload);
    default:
      return course_designs;
  }
};

