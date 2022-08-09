
import * as api from '../api/attendance.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getAttendances = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAttendances();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAttendance = (attendance) => async (dispatch) => {
  try {
    const { data } = await api.createAttendance(attendance);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAttendance = (id, attendance) => async (dispatch) => {
  try {
    const { data } = await api.updateAttendance(id, attendance);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteAttendance = (id) => async (dispatch) => {
  try {
    await api.deleteAttendance(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneAttendance = (section, course_code, day, month, academic_year) => async (dispatch) => {
  try {
    console.log(section + ' ' + course_code + ' ' + day + ' ' + month + ' ' + academic_year )
    const { data } = await api.fetchOne(section, course_code, day, month,academic_year);
    console.log("data " + data);
   
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const searchAll = (start_day, start_month, start_year, end_day, end_month, end_year) => async (dispatch) => {
  try {
    // console.log(section + ' ' + course_code + ' ' + day + ' ' + month + ' ' + academic_year )
    const { data } = await api.fetchMany(start_day, start_month, start_year, end_day, end_month, end_year);
    console.log("data " + data);
   
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};