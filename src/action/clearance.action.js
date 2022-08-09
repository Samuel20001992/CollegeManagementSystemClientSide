
import * as api from '../api/clearance.api.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export const getClearances = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClearances();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createClearance = (clearance) => async (dispatch) => {
  try {
    const { data } = await api.createClearance(clearance);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateClearance = (id, clearance) => async (dispatch) => {
  try {
    const { data } = await api.updateClearance(id, clearance);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteClearance = (id) => async (dispatch) => {
  try {
    await api.deleteClearance(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneClearance = (clearance_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOne(clearance_id);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};