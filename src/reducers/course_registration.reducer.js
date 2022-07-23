import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (courseRegistrations = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return courseRegistrations.map((courseRegistration) => (courseRegistration._id === action.payload._id ? action.payload : courseRegistration));
    case CREATE:
      return [...courseRegistrations, action.payload];
    case UPDATE:
      return courseRegistrations.map((courseRegistration) => (courseRegistration._id === action.payload._id ? action.payload : courseRegistration));
    case DELETE:
      return courseRegistrations.filter((courseRegistration) => courseRegistration._id !== action.payload);
    default:
      return courseRegistrations;
  }
};

