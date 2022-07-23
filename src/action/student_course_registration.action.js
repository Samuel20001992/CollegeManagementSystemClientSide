
import * as api from '../api/student_course_registration.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getStudent_Course_Registrations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudent_Course_Registrations();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudent_Course_Registration = (student_course_registration) => async (dispatch) => {
  try {
    const { data } = await api.createStudent_Course_Registration(student_course_registration);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudent_Course_Registration = (id, student_course_registration) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent_Course_Registration(id, student_course_registration);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteStudent_Course_Registration = (id) => async (dispatch) => {
  try {
    await api.deleteStudent_Course_Registration(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneStudent = (attendance_year, semester,student_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(attendance_year, semester,student_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
