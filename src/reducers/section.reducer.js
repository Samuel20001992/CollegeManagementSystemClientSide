import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (sections = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      // console.log(action.payload);
      return  action.payload;
    case LIKE:
      return sections.map((section) => (section._id === action.payload._id ? action.payload : section));
    case CREATE:
      return [...sections, action.payload];
    case UPDATE:
      return sections.map((section) => (section._id === action.payload._id ? action.payload : section));
    case DELETE:
      return sections.filter((section) => section._id !== action.payload);
    default:
      return sections;
  }
};

