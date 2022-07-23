
import * as api from '../api/course_offering.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourse_Offerings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse_Offerings();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse_Offering = (course_offering) => async (dispatch) => {
  try {
    const { data } = await api.createCourse_Offering(course_offering);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourse_Offering = (id, course_offering) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse_Offering(id, course_offering);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourse_Offering = (id) => async (dispatch) => {
  try {
    await api.deleteCourse_Offering(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
