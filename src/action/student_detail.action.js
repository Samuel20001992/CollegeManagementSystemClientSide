
import * as api from '../api/student_detail.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getStudent_Details = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudent_Details();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createStudent_Detail = (student_detail) => async (dispatch) => {
  try {
    const { data } = await api.createStudent_Detail(student_detail);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudent_Detail = (id, student_detail) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent_Detail(id, student_detail);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteStudent_Detail = (id) => async (dispatch) => {
  try {
    await api.deleteStudent_Detail(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneStudent_Details = (student_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(student_id);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};


