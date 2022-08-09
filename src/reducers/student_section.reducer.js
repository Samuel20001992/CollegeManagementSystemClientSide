import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (student_sections = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return student_sections.map((student_section) => (student_section._id === action.payload._id ? action.payload : student_section));
    case CREATE:
      return [...student_sections, action.payload];
    case UPDATE:
      return student_sections.map((student_section) => (student_section._id === action.payload._id ? action.payload : student_section));
    case DELETE:
      return student_sections.filter((student_section) => student_section._id !== action.payload);
    default:
      return student_sections;
  }
};

