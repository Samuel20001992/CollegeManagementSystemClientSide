
import * as api from '../api/course_design.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourse_Designs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse_Designs();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse_Design = (course_design) => async (dispatch) => {
  try {
    const { data } = await api.createCourse_Design(course_design);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourse_Design = (id, course_design) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse_Design(id, course_design);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourse_Design = (id) => async (dispatch) => {
  try {
    await api.deleteCourse_Design(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneCourseDesign = (course_design_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(course_design_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};