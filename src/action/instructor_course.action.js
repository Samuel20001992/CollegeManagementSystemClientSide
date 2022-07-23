
import * as api from '../api/instructor_course.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getInstructor_Courses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInstructor_Courses();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createInstructor_Course = (instructor_course) => async (dispatch) => {
  try {
    const { data } = await api.createInstructor_Course(instructor_course);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInstructor_Course = (id, instructor_course) => async (dispatch) => {
  try {
    const { data } = await api.updateInstructor_Course(id, instructor_course);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteInstructor_Course = (id) => async (dispatch) => {
  try {
    await api.deleteInstructor_Course(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
