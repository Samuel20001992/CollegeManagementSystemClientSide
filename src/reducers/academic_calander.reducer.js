import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (academic_calanders = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return academic_calanders.map((academic_calander) => (academic_calander._id === action.payload._id ? action.payload : academic_calander));
    case CREATE:
      return [...academic_calanders, action.payload];
    case UPDATE:
      return academic_calanders.map((academic_calander) => (academic_calander._id === action.payload._id ? action.payload : academic_calander));
    case DELETE:
      return academic_calanders.filter((academic_calander) => academic_calander._id !== action.payload);
    default:
      return academic_calanders;
  }
};

