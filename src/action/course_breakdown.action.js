
import * as api from '../api/course_breakdown.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getCourse_Breakdowns = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse_Breakdowns();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCourse_Breakdown = (course_breakdown) => async (dispatch) => {
  try {
    const { data } = await api.createCourse_Breakdown(course_breakdown);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCourse_Breakdown = (id, course_breakdown) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse_Breakdown(id, course_breakdown);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteCourse_Breakdown = (id) => async (dispatch) => {
  try {
    await api.deleteCourse_Breakdown(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneCourseBreakdown = (course_breakdown_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(course_breakdown_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
