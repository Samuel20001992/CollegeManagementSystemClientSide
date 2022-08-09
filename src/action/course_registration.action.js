
import * as api from '../api/course_registration.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourse_Registrations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse_Registrations();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse_Registration = (course_registration) => async (dispatch) => {
  try {
    const { data } = await api.createCourse_Registration(course_registration);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourse_Registration = (id, course_registration) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse_Registration(id, course_registration);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourse_Registration = (id) => async (dispatch) => {
  try {
    await api.deleteCourse_Registration(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneCourse = (course_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(course_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};