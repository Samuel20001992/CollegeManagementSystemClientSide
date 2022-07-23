
import * as api from '../api/semester_grade.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getSemester_Grades = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSemester_Grades();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSemester_Grade = (semester_grade) => async (dispatch) => {
  try {
    const { data } = await api.createSemester_Grade(semester_grade);
    console.log('hi')
    console.log('hi')
    console.log('hi ' + data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSemester_Grade = (id, semester_grade) => async (dispatch) => {
  try {
    const { data } = await api.updateSemester_Grade(id, semester_grade);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteSemester_Grade = (id) => async (dispatch) => {
  try {
    await api.deleteSemester_Grade(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

