
import * as api from '../api/totals.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getTotals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTotals();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTotal = (totals) => async (dispatch) => {
  try {
    const { data } = await api.createTotal(totals);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTotal = (id, totals) => async (dispatch) => {
  try {
    const { data } = await api.updateTotal(id, totals);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteTotal = (id) => async (dispatch) => {
  try {
    await api.deleteTotal(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTotal = (student_id) => async (dispatch) => {
  try {
    console.log("action")
    console.log("hfalaf")
    console.log("hfalaf")
    console.log("hfalaf")
    const { data } = await api.fetchOne(student_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};