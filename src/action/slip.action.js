
import * as api from '../api/slip.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getSlips = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSlips();
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneSlips = (attendance_year, semester,student_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(attendance_year, semester,student_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSlip = (slip) => async (dispatch) => {
  try {
    const { data } = await api.createSlip(slip);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};




export const updateSlip = (id, slip) => async (dispatch) => {
  try {
    const { data } = await api.updateSlip(id, slip);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteSlip = (id) => async (dispatch) => {
  try {
    await api.deleteSlip(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


